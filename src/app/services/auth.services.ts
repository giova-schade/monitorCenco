import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Role, MonitorAdmin } from '../models/role';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { MenuItem } from 'primeng/api';
import { UrlSerializer } from '@angular/router';
import { StateService } from './state.service';



export const alllinks: MenuItem[] = [

    {
        label: 'Monitor de procesos',
        icon: '',
        items: [
            {
                routerLink: "Home",
                label: "Inicio",
                icon: "pi pi-home"
            },
            {
                routerLink: "UploadInput",
                label: "Carga de inputs",
                icon: "pi pi-cloud-upload"
            },            
            {
                routerLink: "ProcessExecutions",
                label: "Monitor",
                icon: "pi pi-chart-line"
            },
            {
                routerLink: "Configuration",
                label: "Configuración",
                icon: "pi pi-sliders-h"
            }

        ]
    }
];
export const links: MenuItem[] = []

export interface Area {
    AREA: string
}
export interface StartupData {
    respuesta: any;
    SYSDATE: string
    SYSTIME: string
    areas: Area[]
    login: boolean
    MF_GETUSER: string
    groups: any
}


@Injectable()

export class AuthService {
    private user: User = new User;
    private isUserLoggedIn$ = new BehaviorSubject(true)
    private startupDataCache: StartupData | null = null
    public isUserLoggedIn = this.isUserLoggedIn$.asObservable()
    public username = new BehaviorSubject('')
    private userPermissions: string[] = [];

    constructor(private http: HttpClient, private stateService: StateService) {

    }

    public updatePermissionsFromApiResponse(config: any[]): void {
        const userRole = this.user.role;
        const roleConfig = config.find(role => role.name === userRole);
        if (roleConfig) {
            this.userPermissions = roleConfig.permissions;
        }
    }

    public hasPermission(permission: string): boolean {
        return this.userPermissions.includes(permission);
    }

    public loginFromStartupData(startupData: StartupData) {
        this.login(startupData.groups[0].ROLE, startupData.groups[0].NOMBRE, '', '');
    }
    public isAuthorized() {
        return !!this.user.name;
    }

    public hasRole(role: Role) {
        return this.isAuthorized() && this.user.role === role;
    }

    public existe(role: string, roles: any) {
        for (let rol in roles) {
            if (rol == role) {
                return true;
            }
        }
        return false;
    }



    public login(role: Role, name: any, info: any, urlValid: any) {
        this.user = { role: role, name: name, info: info, urlValid: urlValid };
    }

    public GetuserInfo() {
        return this.user;
    }
    public GetUserOptions(role: any, urlValid: any) {
        alllinks.forEach((link) => {
            this.pushLink(role, link, urlValid);
        })
        return links;
    }
    public downloadTextFile(filename: string, text: string) {
        const element = document.createElement('a')
        element.setAttribute(
            'href',
            'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
        )
        element.setAttribute('download', filename + '.txt')

        element.style.display = 'none'
        document.body.appendChild(element)

        element.click()

        document.body.removeChild(element)
    }



    public setIsLoggedIn(value: boolean) {
        this.isUserLoggedIn$.next(value)
    }


    public  pushLink(role:any, link:any, urlValid:any) {
        let roleConfig;
        if (role === "MonitorAdmin") {
            roleConfig = urlValid; 
        } else {
            return; // Si el rol no es MonitorAdmin, no hacemos nada.
        }

        // Validar si el link principal está permitido
        if (urlValid.includes(link.routerLink)) {
            links.push(link);
        }

        // Ahora procesamos los sub-items si existen
        if (link.items && link.items.length) {
            let filteredSubItems = link.items.filter((subItem: any) => urlValid.includes(subItem.routerLink));
            if (filteredSubItems.length) {
                // Solo agregamos los subItems permitidos
                links.push({ ...link, items: filteredSubItems });
            }
        }
    }
    public PushSuburl(link: any, roleConfig: any, role: string) {
        var suburl = [];
        if (link.hasOwnProperty('items')) {
            for (let subitem in link.items) {
                if (link.items[subitem].routerLink.indexOf('/') > 0) {
                    for (let sub in roleConfig) {
                        if (sub == link.items[subitem].routerLink.split('/')[1] && roleConfig[sub] == 'Yes') {
                            link.items[subitem].routerLink = link.items[subitem].routerLink;
                            suburl.push(link.items[subitem]);
                        }
                    }
                } else {
                    for (let sub in roleConfig) {
                        if (sub == link.items[subitem].routerLink && roleConfig[sub] == 'Yes') {
                            link.items[subitem].routerLink = link.items[subitem].routerLink;
                            suburl.push(link.items[subitem]);
                        }
                    }
                }
            }
            link.items = suburl;
        }

        return link;
    }
    public ValidaUrl(pagina: any, paginas: any) {
        for (let valor in paginas) {
            if (valor == pagina.routerLink && paginas[valor] == 'Yes') {
                return true;
            }
        }

        return false;
    }


}

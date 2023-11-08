import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, StartupData } from './services/auth.services';
import { Role } from './models/role';
import { SasService } from './services/sas.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService, private sasService: SasService) { }

    private valorRetorno: boolean = false;

    canActivate(route: ActivatedRouteSnapshot): Promise<boolean> | boolean { 
        return this.sasService.request('common/appinit', null).then((response: any) => {
            const confiUser = response.config.find((role: any) => role.name === response.groups[0].ROLE);
            this.authService.updatePermissionsFromApiResponse(response.config);
        
            this.sasService.SetLogin(response.groups[0].ROLE,response.groups[0].NOMBRE,'',confiUser.permissions);

            if (!this.authService.isAuthorized()) {
                this.router.navigate(['access-denied']);
                return false;
            }
             // Asume que los datos de la ruta incluyen los permisos necesarios para esa ruta
            const requiredPermissions = route.data['permissions'] as string[];
            if (requiredPermissions && !requiredPermissions.some(permission => this.authService.hasPermission(permission))) {
                this.router.navigate(['access-denied']);
                return false;
            }

            return true;
            
        }).catch(error => {

            console.log('no se pudo ejecutar el servicio init')
            this.router.navigate(['access-denied']);
            return false;
        });
    }
    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.authService.isAuthorized()) {
            return false;
        }

        const roles = route.data && route.data['roles'] as Role[];
        if (roles && !roles.some(r => this.authService.hasRole(r))) {
            return false;
        }

        return true;
    }
}

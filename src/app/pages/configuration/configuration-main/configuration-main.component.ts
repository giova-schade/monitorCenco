import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SasService } from 'src/app/services/sas.service';
interface Regla {
  nombre: string;
  valorSeleccionado: number;
  descripcion: string;
  opciones: { label: string; value: number }[];
}

interface Proceso {
  nombre: string;
  reglas: Regla[];
}

@Component({
  selector: 'app-configuration-main',
  templateUrl: './configuration-main.component.html',
  styleUrls: ['./configuration-main.component.scss']
})
export class ConfigurationMainComponent {
  loadingPage: boolean;
  activeIndex: number = 0;
  procesos: any[] = [];

constructor(private messageService: MessageService,private sasService: SasService){
  this.loadingPage = false;
}
ngOnInit(){

  this.loadingPage = true;

  this.sasService.request('common/getReglas', null).then((respuesta: any) => {
    const estadoRes = respuesta.status[0].Estado;
    if (estadoRes.toLowerCase() === "ok") {
      this.procesos = this.transformarReglasAProcesos(respuesta);
      
    } else {
      this.messageService.add({
        severity: "warn",
        detail: respuesta.result[0].MENSAJE,
      });
    }
    this.loadingPage = false;
  }).catch((error: any) => {
    this.messageService.add({
      severity: "error",
      detail: 'Error al listar los datos',
    });
    this.loadingPage = false;


  });

}

private transformarReglasAProcesos(datos: any): Proceso[] {
  const procesosTransformados: Proceso[] = [];

  if (datos && typeof datos === 'object') {
    Object.keys(datos).forEach(key => {
      if (key.startsWith('proceso')) {
        const proceso: Proceso = {
          nombre: key,
          reglas: []
        };

        const reglasProceso = datos[key][0];
        Object.keys(reglasProceso).forEach(nombreRegla => {
          if (!nombreRegla.includes('Desc') && !nombreRegla.includes('_desc')) { 
            const regla: Regla = {
              nombre: nombreRegla,
              valorSeleccionado: reglasProceso[nombreRegla],
              descripcion: reglasProceso[`${nombreRegla}Desc`] || '', 
              opciones: [
                { label: 'Activado', value: 1 },
                { label: 'Desactivado', value: 0 }
              ]
            };
            proceso.reglas.push(regla);
          }
        });

        procesosTransformados.push(proceso);
      }
    });
  }

  return procesosTransformados;
}


public cambiarEstadoRegla(regla: Regla, procNombre: string) {
  this.loadingPage = true;
  
  const payload = {
    nombreProc: procNombre,
    nombreRegla: regla.nombre,
    nuevoEstado: regla.valorSeleccionado
  };

  this.sasService.actualizarRegla('common/updateReglas',payload).then(
    (respuesta: any) => {
      this.messageService.add({
        severity: "success",
        detail: `El proceso ${procNombre} cuya regla ${regla.nombre} ha sido ${regla.valorSeleccionado === 1 ? 'Activada' : 'Desactivada'}.`,
      });
    },
    (error: any) => {
      this.messageService.add({
        severity: "error",
        detail: 'Error al actualizar la regla',
      });
      // Manejar el error
    }
  ).finally(() => {
    this.loadingPage = false;
  });
}



public handleChange(event: any ){

}
}

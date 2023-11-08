import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SasService } from 'src/app/services/sas.service';
import { Table } from "primeng/table";


@Component({
  selector: 'app-process-executions-main',
  templateUrl: './process-executions-main.component.html',
  styleUrls: ['./process-executions-main.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class ProcessExecutionsMainComponent {
  loadingPage: boolean;
  datasource: any;
  totalRecords: number;
  @ViewChild('datos') datos: any;
  multiSortSegmento: any;
  LogsCampos: any;
  Logsview: boolean;
  loading!: boolean;






  constructor(
    private sasService: SasService,
    private messageService: MessageService
  ) {
    this.loadingPage = false;
    this.totalRecords = 0;
    this.multiSortSegmento = [];
    this.LogsCampos = [];
    this.Logsview = false;



  }
  ngOnInit() {
    this.loadingPage = true;
    this.sasService.request('common/getMonitor', null).then((data: any) => {
      const estado = data.status[0].Estado;
      if (estado == "nook") {
        this.messageService.add({
          severity: "warn",
          detail: data.status[0].MENSAJE,
        });
      } else {
        this.datasource = data.datos;
        this.totalRecords = this.datasource.length;

        if (this.totalRecords) {
          for (let campo in this.datasource[0]) {
            this.LogsCampos.push({ field: campo, header: campo });
            if (campo == 'id_flujo') {
              this.multiSortSegmento.push({ field: 'id_flujo', order: -1 });
            }
          }

        }
        this.loading = false;
        this.loadingPage = false;
        this.Logsview = true;

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

  applyFilterGlobal($event: any, stringVal: any) {
    this.datos.filterGlobal($event.target.value, 'contains');

  }

  clear(table: Table) {
    table.clear();
  }

}

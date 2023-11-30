import { Component, ElementRef, ViewChild } from '@angular/core';
import { UploadFile } from '@sasjs/adapter';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { SasService } from 'src/app/services/sas.service';
interface TabConfig {
  fileIndex: number;
  name: string;
  extension: string;
  urlDownload: string;
  mimeType: string;
}
@Component({
  selector: 'app-upload-input-main',
  templateUrl: './upload-input-main.component.html',
  styleUrls: ['./upload-input-main.component.scss'],
  providers: [MessageService]
})


export class UploadInputMainComponent {
  activeIndex: number = 0;
  loadingPage: boolean;
  files: any[] = [];
  files2: any[] = [];
  files3: any[] = [];
  files4: any[] = [];
  files5: any[] = [];
  files6: any[] = [];
  files7: any[] = [];
  files8: any[] = [];
  files9: any[] = [];
  files10: any[] = [];
  files11: any[] = [];
  files12: any[] = [];
  files13: any[] = [];
  tabConfigurations: TabConfig[] = [];
  multiSortField: any;
  Fieldview: boolean;
  loading!: boolean;
  datasource: any;
  fieldCampos: any;


  @ViewChild('datos') datos: any;

  private extensionMap: { [key: number]: string } = {
  };

  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef | any;

  constructor(private messageService: MessageService, private sasService: SasService,) {
    this.loadingPage = false;
    this.fieldCampos = [];
    this.multiSortField = [];
    this.Fieldview = false;
    this.datasource = [];



  }
  ngOnInit() {
    this.loadingPage = true;

    this.sasService.request('common/getConfig', null).then((res: any) => {
      const estado = res.status[0].Estado;

      if (estado.toLowerCase() === "ok") {
        this.setTabConfigurations(res.datos);
        const config = this.getConfigByIndex(1);
        this.sasService.getDataField('common/getDataField', config.name).then((respuesta: any) => {
          const estadoRes = respuesta.status[0].Estado;
          if (estadoRes.toLowerCase() === "ok") {
            this.actualizarTabla(respuesta.datos);
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

      } else {
        this.messageService.add({
          severity: "warn",
          detail: res.result[0].MENSAJE,
        });
      }

    });



  }

  public handleChange(event: any) {
    this.loadingPage = true;
    const config = this.getConfigByIndex(event.index + 1);
    this.sasService.getDataField('common/getDataField', config.name).then((respuesta: any) => {
      const estadoRes = respuesta.status[0].Estado;
      if (estadoRes.toLowerCase() === "ok") {
        this.actualizarTabla(respuesta.datos);
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

  private actualizarTabla(datos: any[]): void {
    this.Fieldview = false;

    // Limpiar datos y columnas existentes
    this.datasource = [];
    this.fieldCampos = [];

    // Verificar si los datos están vacíos
    if (!datos || datos.length === 0) {
      return;
    }

    // Asignar los datos a la fuente de datos
    this.datasource = datos;

    // Utilizar las claves del primer objeto para definir las columnas
    Object.keys(datos[0]).forEach(key => {
      this.fieldCampos.push({ field: key, header: key });
    });
    this.Fieldview = true;
  }

  private setTabConfigurations(datos: any[]) {
    this.extensionMap = {};

    datos.forEach(dato => {
      const mimeType = this.convertToMimeType(dato.extencion);
      this.extensionMap[dato.file] = mimeType;

      this.tabConfigurations.push({
        fileIndex: dato.file,
        name: dato.name,
        extension: dato.extencion,
        urlDownload: dato.urlDownload,
        mimeType: mimeType
      });
    });
  }

  private convertToMimeType(extension: string): string {
    const extensionToMimeType: { [key: string]: string } = {
      'txt': 'text/plain',
      'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      // Agrega aquí más mapeos si son necesarios
    };

    return extensionToMimeType[extension.toLowerCase()] || 'application/octet-stream';
  }

  public getConfigByIndex(index: number): TabConfig {
    const defaultConfig: TabConfig = {
      fileIndex: index,
      name: '',
      extension: '',
      mimeType: '',
      urlDownload: '' // Asegúrate de agregar esta propiedad a tu interfaz TabConfig si es necesaria
    };

    return this.tabConfigurations.find(config => config.fileIndex === index) || defaultConfig;
  }
  public Cback() {

  }
  public selectFile(i: number): any[] {
    switch (i) {
      case 1:
        return this.files;
      case 2:
        return this.files2;
      case 3:
        return this.files3;
      case 4:
        return this.files4;
      case 5:
        return this.files5;
      case 6:
        return this.files6;
      case 7:
        return this.files7;
      case 8:
        return this.files8;
      case 9:
        return this.files9;
      case 10:
        return this.files10;
      case 11:
        return this.files11;
      case 12:
        return this.files12;
      case 13:
        return this.files13;
      default:
        return [];
    }
  }

  public validatipo(file: File, index: number): boolean {
    const expectedType = this.extensionMap[index];
    if (!expectedType) {
      this.messageService.add({
        severity: "error",
        detail: `Índice no válido (${index}).`,
      });
      return false;
    }

    const fileType = this.getFileType(file);
    if (fileType !== expectedType) {
      this.messageService.add({
        severity: "warn",
        detail: `Tipo de archivo incorrecto. Se esperaba un archivo ${this.getExtension(expectedType)}.`,
      });
      return false;
    }

    return true;
  }
  private getFileType(file: File): string {
    return file.type || file.name.split('.').pop() || 'unknown';
  }


  private getExtension(mimeType: string): string {
    const mimeExtensionMap: { [key: string]: string } = {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel (.xlsx)',
      'application/vnd.ms-excel': 'Excel (.xls)',
      'text/csv': 'CSV (.csv)',
      'text/plain': 'Texto (.txt)'
      // Aquí puedes agregar más mapeos de tipos MIME a descripciones de extensiones
    };

    return mimeExtensionMap[mimeType] || 'desconocido';
  }

  public cargarInput(index: number) {
    let selectedFiles = this.selectFile(index);
    const config = this.getConfigByIndex(index);
    console.log(config)
    if (!selectedFiles) {
      this.messageService.add({
        severity: "error",
        detail: `Índice no válido`,
      });
      return;
    }
    if (selectedFiles.length == 0) {
      this.messageService.add({
        severity: "warn",
        detail: `Debe subir un archivo`,
      });
      return;
    }
    const fileToUpload = selectedFiles[0];
    if (!this.validatipo(fileToUpload, index)) {
      return;
    }

    // Preparar el objeto UploadFile para el SASjs Adapter
    const uploadFile: UploadFile = {
      file: fileToUpload,
      fileName: fileToUpload.name
    };
    const additionalParams = {
      tabInfo: config.name
    };

    // Aquí, debes llamar a tu servicio para subir el archivo
    this.sasService.uploadFile('/putFile', [uploadFile], additionalParams).then((response: any) => {
      // Manejar la respuesta del servidor SAS
      console.log('Archivo subido con éxito:', response);
      this.messageService.add({
        severity: "success",
        detail: `Archivo ${fileToUpload.name} subido con éxito`,
      });
    }).catch((error: any) => {
      console.error('Error al subir el archivo:', error);
      this.messageService.add({
        severity: "error",
        detail: 'Error al subir el archivo',
      });
    });


  }
  public deleteFile(index: number) {
    let selectedFiles = this.selectFile(index);
    selectedFiles.splice(0, 1);
  }


  public uploadFilesSimulator(index: number) {
  }
  public formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  public onFileDropped($event: any, index: number) {
    this.prepareFilesList($event, index);
  }
  public prepareFilesList(files: Array<File>, index: number) {
    let selectedFiles = this.selectFile(index);

    if (selectedFiles.length > 0) {
      this.messageService.add({
        severity: "warn",
        detail: "Solo puedes subir un archivo!",
      });
      return;
    }

    for (const item of files) {
      if (this.validatipo(item, index)) {
        selectedFiles.push(item);
        this.messageService.add({
          severity: "success",
          detail: `Archivo ${item.name} listo para subir.`,
        });
        // Si solo se permite subir un archivo, podrías salir del bucle después de añadir el archivo
        break;
      }
      // El mensaje de error se maneja dentro de validatipo, por lo que no es necesario aquí
    }

    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(index);
  }

  public fileBrowseHandler(files: any, index: number) {
    this.prepareFilesList(files.target.files, index);
  }

  public Download(index: number) {
    const config = this.getConfigByIndex(index);
    if (!config || !config.urlDownload) {
      console.error(`Configuración no disponible para el índice ${index}`);
      // Manejar esta situación adecuadamente
      return;
    }

    this.sasService.download(config.urlDownload).subscribe(response => {
      const contentDisposition = response.headers.get('Content-Disposition');
      console.log(config);
      let filename = config.name;
      if (contentDisposition) {
        const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
        if (matches != null && matches[1]) {
          filename = matches[1].replace(/['"]/g, '');
        }
      }

      if (response.body) {
        const blob = response.body;
        const objectUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = objectUrl;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(objectUrl);
      } else {
        console.error('Error: El cuerpo de la respuesta está vacío');
        // Manejar el caso de cuerpo vacío
      }
    });
  }
  public clear(table: Table) {
    table.clear();
  }
  public applyFilterGlobal($event: any, stringVal: any) {
    this.datos.filterGlobal($event.target.value, 'contains');

  }
}

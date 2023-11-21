import { Component, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SasService } from 'src/app/services/sas.service';

@Component({
  selector: 'app-upload-input-main',
  templateUrl: './upload-input-main.component.html',
  styleUrls: ['./upload-input-main.component.scss'],
  providers: [MessageService]
})
export class UploadInputMainComponent {
  loadingPage: boolean;
  files: any[] = [];
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef | any;

  constructor(private messageService: MessageService, private sasService: SasService,) {
    this.loadingPage = false;

  }
  ngOnInit() {

  }

  public Cback() {

  }
  public cargarInput(index: number) {
    if (this.files.length == 0) {
      return this.messageService.add({
        severity: "error",
        detail: `Debe subir un documento`,
      });
    }

    this.messageService.add({
      severity: "success",
      detail: `se subie el archivo ${index}`,
    });
  }
  public deleteFile(index: number) {
    this.files.splice(index, 1);
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
  public onFileDropped($event: any) {
    this.prepareFilesList($event);
  }
  public prepareFilesList(files: Array<any>) {
    for (const item of files) {
      if (item.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || item.type == ".csv" || item.type == "application/vnd.ms-excel") {
        if (this.files.length == 0) {
          item.progress = 0;
          this.files.push(item);
        } else {

          this.messageService.add({
            severity: "warn",
            detail: "Solo puedes subir un archivo! ",
          });

        }

      } else {

        this.messageService.add({
          severity: "warn",
          detail: "El archivo debe ser de tipo excel! ",
        });

      }

    }
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }


  public fileBrowseHandler(files: any) {
    this.prepareFilesList(files.target.files);
  }

}

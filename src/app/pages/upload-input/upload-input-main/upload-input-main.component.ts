import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-upload-input-main',
  templateUrl: './upload-input-main.component.html',
  styleUrls: ['./upload-input-main.component.scss'],
  providers: [ MessageService]
})
export class UploadInputMainComponent {
  loadingPage: boolean;
constructor(){
  this.loadingPage = false;
}
ngOnInit(){
  
}
}

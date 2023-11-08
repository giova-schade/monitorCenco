import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadInputMainComponent } from './upload-input-main/upload-input-main.component';
import { ToastModule } from 'primeng/toast';
import { BlockUIModule } from 'primeng/blockui';


/* prime ng*/
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageModule } from 'primeng/message';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    UploadInputMainComponent
  ],
  imports: [
    TabViewModule,
    CommonModule,
    ToastModule,
    ToastModule,
    BlockUIModule,
    MessageModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule,
    MessagesModule,
    ProgressBarModule
  ]
})
export class UploadInputModule { }

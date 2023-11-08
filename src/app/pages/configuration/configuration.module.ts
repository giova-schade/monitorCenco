import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationMainComponent } from './configuration-main/configuration-main.component';
import { ToastModule } from 'primeng/toast';
import { BlockUIModule } from 'primeng/blockui';
import { MessageModule } from 'primeng/message';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ProgressBarModule } from 'primeng/progressbar';



@NgModule({
  declarations: [
    ConfigurationMainComponent
  ],
  imports: [
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
export class ConfigurationModule { }

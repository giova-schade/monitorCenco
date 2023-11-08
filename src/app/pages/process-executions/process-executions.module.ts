import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessExecutionsMainComponent } from './process-executions-main/process-executions-main.component';
import { ToastModule } from 'primeng/toast';

/* prime ng*/
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ProgressBarModule } from 'primeng/progressbar';
import { BlockUIModule } from 'primeng/blockui';
import { MessageModule } from 'primeng/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    ProcessExecutionsMainComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    BlockUIModule,
    MessageModule,
    CalendarModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    ButtonModule,
    MessagesModule,
    ProgressBarModule,
    PanelModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
    
  ]
})
export class ProcessExecutionsModule { }

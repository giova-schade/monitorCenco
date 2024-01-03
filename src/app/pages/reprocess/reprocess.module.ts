import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReprocessMainComponent } from './reprocess-main/reprocess-main.component';
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
import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


@NgModule({
  exports: [ReprocessMainComponent],
  declarations: [
    ReprocessMainComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    TabViewModule,
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
    ReactiveFormsModule
    
  ]
})
export class ReprocessModule { }

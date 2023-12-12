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
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';
@NgModule({
  declarations: [
    ConfigurationMainComponent
  ],
  imports: [
    AccordionModule,
    FieldsetModule,
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
    ReactiveFormsModule,
    TableModule
    
  ]
})
export class ConfigurationModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';

//primeng component
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ProgressBarModule } from 'primeng/progressbar';
import { BlockUIModule } from 'primeng/blockui';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  imports: [
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
  ],
  declarations: [
    HomeMainComponent,


  ],
  exports: [
    CommonModule,
    HomeMainComponent,
    DialogModule,
    FormsModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }

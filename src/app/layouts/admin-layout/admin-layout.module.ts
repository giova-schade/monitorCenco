import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
//componentes

import {  HomeModule } from "../../pages/home/home.module";
import {  ConfigurationModule } from "../../pages/configuration/configuration.module";
import {  ProcessExecutionsModule } from "../../pages/process-executions/process-executions.module";
import {  UploadInputModule } from "../../pages/upload-input/upload-input.module";




import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// primeng
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { SidebarModule } from 'primeng/sidebar';
import { ListboxModule } from 'primeng/listbox';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { RippleModule } from 'primeng/ripple';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BlockUIModule} from 'primeng/blockui';
import {PanelMenuModule} from 'primeng/panelmenu';



@NgModule({
  imports: [
    MessagesModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ButtonModule,
    DropdownModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    InputTextModule,
    ProgressBarModule,
    SidebarModule,
    ListboxModule,
    ReactiveFormsModule,
    CheckboxModule,
    TabViewModule,
    RippleModule,
    ProgressSpinnerModule,
    BlockUIModule,
    PanelMenuModule,
    HomeModule,
    ConfigurationModule,
    ProcessExecutionsModule,
    UploadInputModule
    
  ],
  declarations: [
    
  ],
  providers: [
   
  ],
})
export class AdminLayoutModule {}

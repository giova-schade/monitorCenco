import { Routes } from "@angular/router";

import { HomeMainComponent } from "../../pages/home/home-main/home-main.component";
import { ConfigurationMainComponent } from "../../pages/configuration/configuration-main/configuration-main.component";
import { ProcessExecutionsMainComponent } from "../../pages/process-executions/process-executions-main/process-executions-main.component";
import { UploadInputMainComponent } from "../../pages/upload-input/upload-input-main/upload-input-main.component";
import { ReprocessMainComponent } from "../../pages/reprocess/reprocess-main/reprocess-main.component";

export const AdminLayoutRoutes: Routes = [
  { path: "Home", component: HomeMainComponent },
  { path: "Configuration", component: ConfigurationMainComponent },
  { path: "ProcessExecutions", component: ProcessExecutionsMainComponent },
  { path: "UploadInput", component: UploadInputMainComponent },
  { path: "Reprocess", component: ReprocessMainComponent },
  
];

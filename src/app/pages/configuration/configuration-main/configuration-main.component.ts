import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration-main',
  templateUrl: './configuration-main.component.html',
  styleUrls: ['./configuration-main.component.scss']
})
export class ConfigurationMainComponent {
  loadingPage: boolean;
constructor(){
  this.loadingPage = false;
}
ngOnInit(){
  
}
}

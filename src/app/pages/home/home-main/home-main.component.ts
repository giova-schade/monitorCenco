import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.scss'],
  providers: [ MessageService]
})
export class HomeMainComponent {
  loadingPage: boolean;
constructor(){
  this.loadingPage = true;
}
ngOnInit(){

}
}

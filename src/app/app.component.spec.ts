import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from 'src/app/services/auth.services';
import { AppComponent } from './app.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { SasjsUiComponent } from './components/sasjs-ui/sasjs-ui.component';


describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule, ToastrModule.forRoot()],
    declarations: [AppComponent, SasjsUiComponent], 
    providers: [AuthService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


});
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar HttpClientTestingModule
import { ConfigurationMainComponent } from './configuration-main.component';
import { MessageService } from 'primeng/api';
import { SasService } from 'src/app/services/sas.service';
import { AuthService } from 'src/app/services/auth.services';
import { BlockUIModule } from 'primeng/blockui';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarModule } from 'primeng/progressbar';

describe('ConfigurationMainComponent', () => {
  let component: ConfigurationMainComponent;
  let fixture: ComponentFixture<ConfigurationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigurationMainComponent],
      imports: [HttpClientTestingModule, BlockUIModule, ToastModule, TabViewModule, PanelModule,
        BrowserAnimationsModule , ProgressBarModule],
      providers: [
        MessageService, 
        SasService,
        AuthService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

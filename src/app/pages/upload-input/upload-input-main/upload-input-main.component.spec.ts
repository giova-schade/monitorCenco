import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UploadInputMainComponent } from './upload-input-main.component';
import { SasService } from 'src/app/services/sas.service';
import { AuthService } from 'src/app/services/auth.services';
import { BlockUIModule } from 'primeng/blockui';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { ProgressBarModule } from 'primeng/progressbar';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';

describe('UploadInputMainComponent', () => {
  let component: UploadInputMainComponent;
  let fixture: ComponentFixture<UploadInputMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadInputMainComponent],
      imports: [HttpClientTestingModule,
        BlockUIModule,
        ToastModule,
        TabViewModule,
        ProgressBarModule,
        MenuModule,
      PanelMenuModule],
      providers: [
        SasService,
        AuthService
      ]
    });
    fixture = TestBed.createComponent(UploadInputMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

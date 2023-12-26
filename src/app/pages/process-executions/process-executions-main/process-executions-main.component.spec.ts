import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlockUIModule } from 'primeng/blockui';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressBarModule } from 'primeng/progressbar';
import { MessageService } from 'primeng/api';
import { SasService } from 'src/app/services/sas.service';
import { AuthService } from 'src/app/services/auth.services';

import { ProcessExecutionsMainComponent } from './process-executions-main.component';

describe('ProcessExecutionsMainComponent', () => {
  let component: ProcessExecutionsMainComponent;
  let fixture: ComponentFixture<ProcessExecutionsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessExecutionsMainComponent],
      imports: [
        HttpClientTestingModule, 
        BlockUIModule, 
        ToastModule, 
        TabViewModule, 
        PanelModule,
        BrowserAnimationsModule, 
        ProgressBarModule
      ],
      providers: [
        MessageService, 
        SasService,
        AuthService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcessExecutionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

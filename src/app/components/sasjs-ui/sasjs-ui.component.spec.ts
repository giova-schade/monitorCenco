import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SasjsUiComponent } from './sasjs-ui.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SasService } from '../../services/sas.service';
import { StateService } from '../../services/state.service';
import { AuthService } from '../../services/auth.services'; 
import { RouterTestingModule } from '@angular/router/testing';

describe('SasjsUiComponent', () => {
  let component: SasjsUiComponent;
  let fixture: ComponentFixture<SasjsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SasjsUiComponent],
      imports: [HttpClientTestingModule, RouterTestingModule], 
      providers: [SasService, StateService, AuthService] 
    }).compileComponents();

    fixture = TestBed.createComponent(SasjsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
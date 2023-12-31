import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SasjsLogsComponent } from './sasjs-logs.component'
import { ClarityModule } from '@clr/angular';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('SasjsLogsComponent', () => {
  let component: SasjsLogsComponent
  let fixture: ComponentFixture<SasjsLogsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SasjsLogsComponent],
      imports: [ ClarityModule ,ToastrModule.forRoot() ] ,
      providers: [
        ToastrService 
      ]

    }).compileComponents()

    fixture = TestBed.createComponent(SasjsLogsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
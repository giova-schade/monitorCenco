import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SasjsHeaderComponent } from './sasjs-header.component'
import { ClrDropdownModule } from '@clr/angular'; 


describe('SasjsHeaderComponent', () => {
  let component: SasjsHeaderComponent
  let fixture: ComponentFixture<SasjsHeaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SasjsHeaderComponent],
      imports: [ ClrDropdownModule ]
    }).compileComponents()

    fixture = TestBed.createComponent(SasjsHeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
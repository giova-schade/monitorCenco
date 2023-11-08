import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessExecutionsMainComponent } from './process-executions-main.component';

describe('ProcessExecutionsMainComponent', () => {
  let component: ProcessExecutionsMainComponent;
  let fixture: ComponentFixture<ProcessExecutionsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessExecutionsMainComponent]
    });
    fixture = TestBed.createComponent(ProcessExecutionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

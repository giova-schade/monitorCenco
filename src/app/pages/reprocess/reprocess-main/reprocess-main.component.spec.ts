import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprocessMainComponent } from './reprocess-main.component';

describe('ReprocessMainComponent', () => {
  let component: ReprocessMainComponent;
  let fixture: ComponentFixture<ReprocessMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReprocessMainComponent]
    });
    fixture = TestBed.createComponent(ReprocessMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInputMainComponent } from './upload-input-main.component';

describe('UploadInputMainComponent', () => {
  let component: UploadInputMainComponent;
  let fixture: ComponentFixture<UploadInputMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadInputMainComponent]
    });
    fixture = TestBed.createComponent(UploadInputMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

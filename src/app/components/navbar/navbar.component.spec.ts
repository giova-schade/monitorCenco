import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NavbarComponent } from "./navbar.component";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SasjsLogsComponent } from "../sasjs-logs/sasjs-logs.component";
import { ToastModule } from 'primeng/toast';
import { AuthService } from "src/app/services/auth.services";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button'; // Importa ButtonModule de PrimeNG
import { SasService } from "src/app/services/sas.service";
import { MessageService } from "primeng/api";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent, SasjsLogsComponent],
      imports: [HttpClientTestingModule, ToastModule, RouterTestingModule, NgbModule, ButtonModule], 
      providers: [ SasService,
        AuthService,
        MessageService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
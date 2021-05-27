import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeEstadosComponent } from './lista-de-estados.component';

describe('ListaDeEstadosComponent', () => {
  let component: ListaDeEstadosComponent;
  let fixture: ComponentFixture<ListaDeEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeEstadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

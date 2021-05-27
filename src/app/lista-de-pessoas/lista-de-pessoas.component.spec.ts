import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDePessoasComponent } from './lista-de-pessoas.component';

describe('ListaDePessoasComponent', () => {
  let component: ListaDePessoasComponent;
  let fixture: ComponentFixture<ListaDePessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDePessoasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDePessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

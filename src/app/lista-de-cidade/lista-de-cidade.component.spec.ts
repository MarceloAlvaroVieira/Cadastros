import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeCidadeComponent } from './lista-de-cidade.component';

describe('ListaDeCidadeComponent', () => {
  let component: ListaDeCidadeComponent;
  let fixture: ComponentFixture<ListaDeCidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeCidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

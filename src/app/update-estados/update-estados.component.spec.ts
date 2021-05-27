import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEstadosComponent } from './update-estados.component';

describe('UpdateEstadosComponent', () => {
  let component: UpdateEstadosComponent;
  let fixture: ComponentFixture<UpdateEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEstadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

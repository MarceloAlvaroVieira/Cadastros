import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCidadesComponent } from './update-cidades.component';

describe('UpdateCidadesComponent', () => {
  let component: UpdateCidadesComponent;
  let fixture: ComponentFixture<UpdateCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

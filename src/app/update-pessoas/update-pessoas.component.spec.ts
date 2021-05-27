import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePessoasComponent } from './update-pessoas.component';

describe('UpdatePessoasComponent', () => {
  let component: UpdatePessoasComponent;
  let fixture: ComponentFixture<UpdatePessoasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePessoasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

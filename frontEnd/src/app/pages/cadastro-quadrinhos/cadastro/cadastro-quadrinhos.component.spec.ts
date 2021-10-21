import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroQuadrinhosComponent } from "./cadastroQuadrinhosComponent";

describe('CadastroQuadrinhosComponent', () => {
  let component: CadastroQuadrinhosComponent;
  let fixture: ComponentFixture<CadastroQuadrinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroQuadrinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroQuadrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

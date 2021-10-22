import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusQuadrinhosDetalhesComponent } from './meus-quadrinhos-detalhes.component';

describe('MeusQuadrinhosDetalhesComponent', () => {
  let component: MeusQuadrinhosDetalhesComponent;
  let fixture: ComponentFixture<MeusQuadrinhosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusQuadrinhosDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusQuadrinhosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

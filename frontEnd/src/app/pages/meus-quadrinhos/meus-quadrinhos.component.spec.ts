import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusQuadrinhosComponent } from './meus-quadrinhos.component';

describe('MeusQuadrinhosComponent', () => {
  let component: MeusQuadrinhosComponent;
  let fixture: ComponentFixture<MeusQuadrinhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusQuadrinhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusQuadrinhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

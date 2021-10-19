import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsDetalhesComponent } from './comics-detalhes.component';

describe('ComicsDetalhesComponent', () => {
  let component: ComicsDetalhesComponent;
  let fixture: ComponentFixture<ComicsDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

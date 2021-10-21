import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesDetalhesComponent } from './series-detalhes.component';

describe('SeriesDetalhesComponent', () => {
  let component: SeriesDetalhesComponent;
  let fixture: ComponentFixture<SeriesDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

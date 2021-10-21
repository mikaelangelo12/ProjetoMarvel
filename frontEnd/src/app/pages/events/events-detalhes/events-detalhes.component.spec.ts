import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetalhesComponent } from './events-detalhes.component';

describe('EventsDetalhesComponent', () => {
  let component: EventsDetalhesComponent;
  let fixture: ComponentFixture<EventsDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

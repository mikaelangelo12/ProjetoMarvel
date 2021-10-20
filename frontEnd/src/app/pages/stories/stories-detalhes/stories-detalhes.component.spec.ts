import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesDetalhesComponent } from './stories-detalhes.component';

describe('StoriesDetalhesComponent', () => {
  let component: StoriesDetalhesComponent;
  let fixture: ComponentFixture<StoriesDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

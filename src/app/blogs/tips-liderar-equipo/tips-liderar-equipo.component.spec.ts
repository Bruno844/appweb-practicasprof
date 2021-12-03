import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsLiderarEquipoComponent } from './tips-liderar-equipo.component';

describe('TipsLiderarEquipoComponent', () => {
  let component: TipsLiderarEquipoComponent;
  let fixture: ComponentFixture<TipsLiderarEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsLiderarEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsLiderarEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

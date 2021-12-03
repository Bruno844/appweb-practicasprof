import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoTrabajoAmenazaComponent } from './equipo-trabajo-amenaza.component';

describe('EquipoTrabajoAmenazaComponent', () => {
  let component: EquipoTrabajoAmenazaComponent;
  let fixture: ComponentFixture<EquipoTrabajoAmenazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoTrabajoAmenazaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoTrabajoAmenazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

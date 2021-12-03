import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecerEstrategiaEmpresarialComponent } from './establecer-estrategia-empresarial.component';

describe('EstablecerEstrategiaEmpresarialComponent', () => {
  let component: EstablecerEstrategiaEmpresarialComponent;
  let fixture: ComponentFixture<EstablecerEstrategiaEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablecerEstrategiaEmpresarialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablecerEstrategiaEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesAgilityComponent } from './bussines-agility.component';

describe('BussinesAgilityComponent', () => {
  let component: BussinesAgilityComponent;
  let fixture: ComponentFixture<BussinesAgilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinesAgilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesAgilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

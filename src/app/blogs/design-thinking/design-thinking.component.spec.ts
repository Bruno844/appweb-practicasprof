import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignThinkingComponent } from './design-thinking.component';

describe('DesignThinkingComponent', () => {
  let component: DesignThinkingComponent;
  let fixture: ComponentFixture<DesignThinkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignThinkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignThinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

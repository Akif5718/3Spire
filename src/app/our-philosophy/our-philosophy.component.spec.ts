import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPhilosophyComponent } from './our-philosophy.component';

describe('OurPhilosophyComponent', () => {
  let component: OurPhilosophyComponent;
  let fixture: ComponentFixture<OurPhilosophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPhilosophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

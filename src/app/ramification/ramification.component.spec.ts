import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RamificationComponent } from './ramification.component';

describe('RamificationComponent', () => {
  let component: RamificationComponent;
  let fixture: ComponentFixture<RamificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RamificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

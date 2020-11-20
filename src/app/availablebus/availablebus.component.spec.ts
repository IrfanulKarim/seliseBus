import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablebusComponent } from './availablebus.component';

describe('AvailablebusComponent', () => {
  let component: AvailablebusComponent;
  let fixture: ComponentFixture<AvailablebusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablebusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablebusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlaptopsComponent } from './adminlaptops.component';

describe('AdminlaptopsComponent', () => {
  let component: AdminlaptopsComponent;
  let fixture: ComponentFixture<AdminlaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

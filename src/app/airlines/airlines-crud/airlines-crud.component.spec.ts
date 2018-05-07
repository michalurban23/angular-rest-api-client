import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinesCRUDComponent } from './airlines-crud.component';

describe('AirlinesCRUDComponent', () => {
  let component: AirlinesCRUDComponent;
  let fixture: ComponentFixture<AirlinesCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlinesCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

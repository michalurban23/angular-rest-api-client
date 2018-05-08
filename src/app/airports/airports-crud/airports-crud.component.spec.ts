import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportCRUDComponent } from './airport-crud.component';

describe('AirportCRUDComponent', () => {
  let component: AirportCRUDComponent;
  let fixture: ComponentFixture<AirportCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

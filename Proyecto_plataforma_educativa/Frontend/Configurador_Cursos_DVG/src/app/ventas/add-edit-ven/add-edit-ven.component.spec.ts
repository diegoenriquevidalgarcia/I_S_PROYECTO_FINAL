import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVenComponent } from './add-edit-ven.component';

describe('AddEditVenComponent', () => {
  let component: AddEditVenComponent;
  let fixture: ComponentFixture<AddEditVenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditVenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditVenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

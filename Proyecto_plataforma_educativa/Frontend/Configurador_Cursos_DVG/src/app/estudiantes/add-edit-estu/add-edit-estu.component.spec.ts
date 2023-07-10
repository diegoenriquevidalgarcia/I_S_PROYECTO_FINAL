import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEstuComponent } from './add-edit-estu.component';

describe('AddEditEstuComponent', () => {
  let component: AddEditEstuComponent;
  let fixture: ComponentFixture<AddEditEstuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEstuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

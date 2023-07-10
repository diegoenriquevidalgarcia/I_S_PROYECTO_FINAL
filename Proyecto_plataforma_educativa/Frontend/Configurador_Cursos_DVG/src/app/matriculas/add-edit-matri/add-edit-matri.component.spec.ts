import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMatriComponent } from './add-edit-matri.component';

describe('AddEditMatriComponent', () => {
  let component: AddEditMatriComponent;
  let fixture: ComponentFixture<AddEditMatriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMatriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditMatriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocenComponent } from './add-edit-docen.component';

describe('AddEditDocenComponent', () => {
  let component: AddEditDocenComponent;
  let fixture: ComponentFixture<AddEditDocenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDocenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDocenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCurComponent } from './add-edit-cur.component';

describe('AddEditCurComponent', () => {
  let component: AddEditCurComponent;
  let fixture: ComponentFixture<AddEditCurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

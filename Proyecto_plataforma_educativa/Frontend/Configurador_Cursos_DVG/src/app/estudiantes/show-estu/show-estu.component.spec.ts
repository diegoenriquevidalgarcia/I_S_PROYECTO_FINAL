import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEstuComponent } from './show-estu.component';

describe('ShowEstuComponent', () => {
  let component: ShowEstuComponent;
  let fixture: ComponentFixture<ShowEstuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEstuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

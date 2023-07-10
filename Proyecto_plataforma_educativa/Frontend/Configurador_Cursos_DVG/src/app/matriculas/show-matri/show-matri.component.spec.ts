import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMatriComponent } from './show-matri.component';

describe('ShowMatriComponent', () => {
  let component: ShowMatriComponent;
  let fixture: ComponentFixture<ShowMatriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMatriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMatriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

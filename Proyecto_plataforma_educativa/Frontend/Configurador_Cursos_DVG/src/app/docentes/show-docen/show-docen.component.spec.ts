import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDocenComponent } from './show-docen.component';

describe('ShowDocenComponent', () => {
  let component: ShowDocenComponent;
  let fixture: ComponentFixture<ShowDocenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDocenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDocenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

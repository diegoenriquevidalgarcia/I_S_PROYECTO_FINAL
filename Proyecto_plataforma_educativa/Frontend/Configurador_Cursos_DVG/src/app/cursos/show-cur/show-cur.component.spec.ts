import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCurComponent } from './show-cur.component';

describe('ShowCurComponent', () => {
  let component: ShowCurComponent;
  let fixture: ComponentFixture<ShowCurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVenComponent } from './show-ven.component';

describe('ShowVenComponent', () => {
  let component: ShowVenComponent;
  let fixture: ComponentFixture<ShowVenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowVenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecentWorkComponent } from './my-recent-work.component';

describe('MyRecentWorkComponent', () => {
  let component: MyRecentWorkComponent;
  let fixture: ComponentFixture<MyRecentWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRecentWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRecentWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

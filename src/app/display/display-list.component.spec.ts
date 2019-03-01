import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListComponent } from './display-list.component';

describe('DisplayListComponent', () => {
  let component: DisplayListComponent;
  let fixture: ComponentFixture<DisplayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

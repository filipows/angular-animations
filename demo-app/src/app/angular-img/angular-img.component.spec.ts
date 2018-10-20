import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularImgComponent } from './angular-img.component';

describe('AngularImgComponent', () => {
  let component: AngularImgComponent;
  let fixture: ComponentFixture<AngularImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AngularImgComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

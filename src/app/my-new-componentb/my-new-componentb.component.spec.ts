import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewComponentbComponent } from './my-new-componentb.component';

describe('MyNewComponentbComponent', () => {
  let component: MyNewComponentbComponent;
  let fixture: ComponentFixture<MyNewComponentbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewComponentbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewComponentbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

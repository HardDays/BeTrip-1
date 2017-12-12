import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAfterBuildComponent } from './view-after-build.component';

describe('ViewAfterBuildComponent', () => {
  let component: ViewAfterBuildComponent;
  let fixture: ComponentFixture<ViewAfterBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAfterBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAfterBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

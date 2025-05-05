import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSplitTestComponent } from './setup-split-test.component';

describe('SetupSplitTestComponent', () => {
  let component: SetupSplitTestComponent;
  let fixture: ComponentFixture<SetupSplitTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetupSplitTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupSplitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

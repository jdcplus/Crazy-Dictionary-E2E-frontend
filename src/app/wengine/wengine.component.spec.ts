import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WengineComponent } from './wengine.component';

describe('WengineComponent', () => {
  let component: WengineComponent;
  let fixture: ComponentFixture<WengineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WengineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WengineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

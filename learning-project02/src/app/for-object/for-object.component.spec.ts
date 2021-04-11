import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForObjectComponent } from './for-object.component';

describe('ForObjectComponent', () => {
  let component: ForObjectComponent;
  let fixture: ComponentFixture<ForObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

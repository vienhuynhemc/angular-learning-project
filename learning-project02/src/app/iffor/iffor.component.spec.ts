import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfforComponent } from './iffor.component';

describe('IfforComponent', () => {
  let component: IfforComponent;
  let fixture: ComponentFixture<IfforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

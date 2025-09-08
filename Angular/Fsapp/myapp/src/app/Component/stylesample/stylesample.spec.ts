import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stylesample } from './stylesample';

describe('Stylesample', () => {
  let component: Stylesample;
  let fixture: ComponentFixture<Stylesample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stylesample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stylesample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

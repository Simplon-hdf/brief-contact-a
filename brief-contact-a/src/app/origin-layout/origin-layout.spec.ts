import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginLayout } from './origin-layout';

describe('OriginLayout', () => {
  let component: OriginLayout;
  let fixture: ComponentFixture<OriginLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriginLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OriginLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

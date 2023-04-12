import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestarionPageComponent } from './regestarion-page.component';

describe('RegestarionPageComponent', () => {
  let component: RegestarionPageComponent;
  let fixture: ComponentFixture<RegestarionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegestarionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegestarionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

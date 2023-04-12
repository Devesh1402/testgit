import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestarionuserComponent } from './regestarionuser.component';

describe('RegestarionuserComponent', () => {
  let component: RegestarionuserComponent;
  let fixture: ComponentFixture<RegestarionuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegestarionuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegestarionuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

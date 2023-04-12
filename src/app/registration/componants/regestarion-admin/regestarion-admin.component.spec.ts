import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestarionAdminComponent } from './regestarion-admin.component';

describe('RegestarionAdminComponent', () => {
  let component: RegestarionAdminComponent;
  let fixture: ComponentFixture<RegestarionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegestarionAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegestarionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

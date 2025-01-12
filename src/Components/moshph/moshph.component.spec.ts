import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshphComponent } from './moshph.component';

describe('MoshphComponent', () => {
  let component: MoshphComponent;
  let fixture: ComponentFixture<MoshphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoshphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoshphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

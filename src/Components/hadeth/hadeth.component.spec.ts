import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadethComponent } from './hadeth.component';

describe('HadethComponent', () => {
  let component: HadethComponent;
  let fixture: ComponentFixture<HadethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HadethComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HadethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

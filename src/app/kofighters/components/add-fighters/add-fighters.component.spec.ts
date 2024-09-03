import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFightersComponent } from './add-fighters.component';

describe('AddFightersComponent', () => {
  let component: AddFightersComponent;
  let fixture: ComponentFixture<AddFightersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFightersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFightersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

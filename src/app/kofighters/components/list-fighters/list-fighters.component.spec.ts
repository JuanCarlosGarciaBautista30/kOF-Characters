import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFightersComponent } from './list-fighters.component';

describe('ListFightersComponent', () => {
  let component: ListFightersComponent;
  let fixture: ComponentFixture<ListFightersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFightersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFightersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

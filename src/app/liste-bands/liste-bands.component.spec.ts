import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBandsComponent } from './liste-bands.component';

describe('ListeBandsComponent', () => {
  let component: ListeBandsComponent;
  let fixture: ComponentFixture<ListeBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

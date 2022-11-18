import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParBandComponent } from './recherche-par-band.component';

describe('RechercheParBandComponent', () => {
  let component: RechercheParBandComponent;
  let fixture: ComponentFixture<RechercheParBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParBandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

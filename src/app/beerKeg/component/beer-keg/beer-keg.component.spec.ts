import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerKegComponent } from './beer-keg.component';

describe('BeerKegComponent', () => {
  let component: BeerKegComponent;
  let fixture: ComponentFixture<BeerKegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerKegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

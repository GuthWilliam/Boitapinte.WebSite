import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have as title 'Boitapinte'`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Boitapinte');
  });

  it(`should have as description 'Boitapinte : suivez la consomation des clients, detectez vos meilleurs ventes, prévoyez vos remplacement de futs...'`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app.description).toEqual('Boitapinte : suivez la consomation des clients, detectez vos meilleurs ventes, prévoyez vos remplacement de futs...');
  });

  it('display the title and quote', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const element = fixture.nativeElement;

    const title = element.querySelector('h1');
    expect(title).withContext('You should have an `h1` element to display the title').not.toBeNull();
    expect(title.textContent).toContain('Boitapinte');

    const subtitle = element.querySelector('h2');
    expect(subtitle).withContext('You should have an `h2` element to display the sub-title').not.toBeNull();
    expect(subtitle.textContent).toContain('Coming soon');
  });

});

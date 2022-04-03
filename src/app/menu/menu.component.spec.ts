import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserModel } from '../user/models/user.model';
import { UserService } from '../user/services/user.service';
import { NgbCollapseConfig, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const fakeUserService = {
    userEvents: new Subject<UserModel>(),
    logout: () => { },
  } as UserService;
  const fakeRouter = jasmine.createSpyObj<Router>('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbCollapseModule],
      declarations: [MenuComponent],
      providers: [{ provide: UserService, useValue: fakeUserService }, { provide: Router, useValue: fakeRouter }],
    })
      .compileComponents();

    // turn off the animation for the collapse
    const collapseConfig = TestBed.inject(NgbCollapseConfig);
    collapseConfig.animation = false;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a `navbarCollapsed` field', () => {
    const menu: MenuComponent = new MenuComponent(fakeUserService, fakeRouter);
    menu.ngOnInit();
    expect(menu.navbarCollapsed)
      .withContext(
        'Check that `navbarCollapsed` is initialized with `true`. Maybe you forgot to declare `navbarCollapsed` in your component.'
      )
      .toBe(true);
  });


  it('should toggle the class on click', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const element = fixture.nativeElement;

    fixture.detectChanges();

    const navbarCollapsed = element.querySelector('#navbar');
    expect(navbarCollapsed).withContext('No element with the id `#navbar`').not.toBeNull();
    expect(navbarCollapsed.classList)
      .withContext('The element with the id `#navbar` should use the `ngbCollapse` directive')
      .not.toContain('show');

    const button = element.querySelector('button');
    expect(button).withContext('No `button` element to collapse the menu').not.toBeNull();
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    const navbar = element.querySelector('#navbar');
    expect(navbar.classList).withContext('The element with the id `#navbar` should use the `ngbCollapse` directive').toContain('show');
  });


  it('should display the user if logged', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    fakeUserService.userEvents.next({ login: 'cedric' } as UserModel);

    fixture.detectChanges();

    const element = fixture.nativeElement;
    const info = element.querySelector('a.nav-link > #current-user');
    expect(info).withContext('You should have an `a` element with the classes `nav-item` to display the user info').not.toBeNull();
    expect(info.textContent).withContext('You should display the name of the user in an `a` element').toContain('cedric');
  });
  
  it('should display a logout button', () => {
    const fixture = TestBed.createComponent(MenuComponent);
    fixture.detectChanges();
    fakeUserService.userEvents.next({ login: 'cedric' } as UserModel);
    fixture.detectChanges();
    spyOn(fixture.componentInstance, 'logout');

    const element = fixture.nativeElement;
    const logout = element.querySelector('span.fa-power-off');
    expect(logout).withContext('You should have a span element with a class `fa-power-off` to log out').not.toBeNull();
    logout.dispatchEvent(new Event('click', { bubbles: true }));

    fixture.detectChanges();
    expect(fixture.componentInstance.logout).toHaveBeenCalled();
  });

  it('should stop the click event propagation', () => {
    const component = new MenuComponent(fakeUserService, fakeRouter);
    const event = new Event('click');
    spyOn(fakeUserService, 'logout');
    spyOn(event, 'preventDefault');
    component.logout(event);

    expect(fakeUserService.logout).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
    expect(fakeRouter.navigate).toHaveBeenCalledWith(['/']);
  });
});

import { TestBed } from '@angular/core/testing';
import { UserModel } from '../models/user.model';

import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  const expectedUser = {
    id: 1,
    login: 'Demo',
    token: 'Demo'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    userService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });


  it('should authenticate a user', () => {
    // spy on the store method
    spyOn(userService, 'storeLoggedInUser');

    const credentials = { login: 'demo', password: 'D3mo' };
    let actualUser: UserModel | undefined;
    userService.authenticate(credentials).subscribe(fetchedUser => (actualUser = fetchedUser));

    // const req = http.expectOne({ method: 'POST', url: `${environment.baseUrl}/api/users/authentication` });
    // expect(req.request.body).toEqual(credentials);
    // req.flush(user);

    expect(actualUser).withContext('The observable should emit the user').toEqual(expectedUser);
    expect(userService.storeLoggedInUser).toHaveBeenCalledWith(expectedUser);
  });

  it('should store the logged in user', () => {
    spyOn(userService.userEvents, 'next');
    spyOn(Storage.prototype, 'setItem');
    // spyOn(jwtInterceptor, 'setJwtToken');

    userService.storeLoggedInUser(expectedUser);

    expect(userService.userEvents.next).toHaveBeenCalledWith(expectedUser);
    expect(Storage.prototype.setItem).toHaveBeenCalledWith('Boitapinte_rememberMe', JSON.stringify(expectedUser));
    // expect(jwtInterceptor.setJwtToken).toHaveBeenCalledWith(expectedUser.token);
  });


  it('should retrieve a user if one is stored', () => {
    spyOn(userService.userEvents, 'next');
    spyOn(Storage.prototype, 'getItem').and.returnValue(JSON.stringify(expectedUser));
    // spyOn(jwtInterceptor, 'setJwtToken');

    userService.retrieveUser();

    expect(userService.userEvents.next).toHaveBeenCalledWith(expectedUser);
    // expect(jwtInterceptor.setJwtToken).toHaveBeenCalledWith(user.token);
  });

  it('should retrieve no user if none stored', () => {
    spyOn(userService.userEvents, 'next');
    spyOn(Storage.prototype, 'getItem');

    userService.retrieveUser();

    expect(userService.userEvents.next).not.toHaveBeenCalled();
  });

  it('should logout the user', () => {
    spyOn(userService.userEvents, 'next');
    spyOn(Storage.prototype, 'removeItem');
    // spyOn(jwtInterceptor, 'removeJwtToken');

    userService.logout();

    expect(userService.userEvents.next).toHaveBeenCalledWith(null);
    expect(Storage.prototype.removeItem).toHaveBeenCalledWith('Boitapinte_rememberMe');
    // expect(jwtInterceptor.removeJwtToken).toHaveBeenCalled();
  });
});

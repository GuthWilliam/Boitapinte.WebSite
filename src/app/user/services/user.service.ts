import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userEvents = new BehaviorSubject<UserModel | null>(null);
  KeyRememberMe = environment.ProjectName + '_rememberMe';

  constructor() {
    this.retrieveUser();
  }

  authenticate(credentials: { login: string; password: string }): Observable<UserModel> {
    return new Observable(observer => {
      if (credentials.login.toUpperCase() == "DEMO" && credentials.password == "D3mo") {
        const user = {
          id: 1,
          login: 'Demo',
          token: 'Demo'
        } as UserModel;
        this.storeLoggedInUser(user);
        observer.next(user);
        observer.complete();
      }
      else
      {
        observer.error("Mauvais login ou mot de passe");
      }
    });
  }


  logout(): void {
    this.userEvents.next(null);
    window.localStorage.removeItem(this.KeyRememberMe);
    // this.jwtInterceptor.removeJwtToken();
  }

  storeLoggedInUser(user: UserModel): void {
    window.localStorage.setItem(this.KeyRememberMe, JSON.stringify(user));
    // this.jwtInterceptor.setJwtToken(user.token);
    this.userEvents.next(user);
  }

  retrieveUser(): void {
    const value = window.localStorage.getItem(this.KeyRememberMe);
    if (value) {
      const user = JSON.parse(value) as UserModel;
      // this.jwtInterceptor.setJwtToken(user.token);
      this.userEvents.next(user);
    }
  }
}

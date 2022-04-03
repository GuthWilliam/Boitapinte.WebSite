import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModel } from '../user/models/user.model';
import { UserService } from '../user/services/user.service';

@Component({
  selector: 'bap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  navbarCollapsed = true;

  user: UserModel | null = null;
  userEventsSubscription: Subscription | null = null;

  constructor(private userService: UserService, private router: Router) { }

  toggleNavbar(): void {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

  ngOnInit(): void {
    this.userEventsSubscription = this.userService.userEvents.subscribe(user => this.user = user);;
  }
  ngOnDestroy(): void {
    this.userEventsSubscription?.unsubscribe();
  }

  logout(event: Event): void {
    event.preventDefault();
    this.userService.logout();
    this.router.navigate(['/']);
  }
}

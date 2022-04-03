import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/components/team/team.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'team', component: TeamComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'contact', component: ContactComponent }
  ];
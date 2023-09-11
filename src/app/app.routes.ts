import { Routes } from '@angular/router';
import { ContactComponent } from './contact/component/contact.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/components/team/team.component';
import { BeerKegComponent } from './beerKeg/component/beer-keg/beer-keg.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'team', component: TeamComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'beerKeg', component: BeerKegComponent }
  ];

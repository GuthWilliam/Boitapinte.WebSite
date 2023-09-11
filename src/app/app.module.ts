import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamMemberComponent } from './team/components/team-member/team-member.component';
import { TeamComponent } from './team/components/team/team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/component/contact.component';
import { BeerKegComponent } from './beerKeg/component/beer-keg/beer-keg.component';

// Import the locale data
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// Register the locale data
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    TeamMemberComponent,
    MenuComponent,
    HomeComponent,
    TeamComponent,
    ContactComponent,
    BeerKegComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    NgbCollapseModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule
  ],
  providers: [Meta, { provide: LOCALE_ID, useValue: 'fr-FR' }, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

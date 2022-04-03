import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamMemberComponent } from './team/components/team-member/team-member.component';
import { TeamComponent } from './team/components/team/team.component';
import { DemoComponent } from './demo/demo.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    TeamComponent,
    TeamMemberComponent,
    DemoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    NgbCollapseModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/component/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamMemberComponent,
    MenuComponent,
    HomeComponent,
    TeamComponent,
    DemoComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    NgbCollapseModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }

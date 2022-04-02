import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'bap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Boitapinte';
  description = 'Boitapinte. Rendez votre tireuse connecté : suivez la consomation des clients, detectez vos meilleurs ventes, prévoyez vos remplacement de futs...'
  descriptionComplete = 'Rendez votre tireuse connecté : suivez la consomation des clients, detectez vos meilleurs ventes, prévoyez vos remplacement de futs...'

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTag({ name: 'description', content: this.description });
    this.metaService.addTag({ name: 'google-site-verification', content: "cC_4F0X97u0UnxIw51FSZiOh9sFAAUcM_T-pWojsH6E" });
  }


}

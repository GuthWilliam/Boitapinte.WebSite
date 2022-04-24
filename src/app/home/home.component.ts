import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'bap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Boitapinte';
  description = 'Boitapinte : suivez la consommation des clients, détectez vos meilleures ventes, prévoyez vos remplacements de fûts...'
  descriptionComplete = 'Boitapinte : suivez la consommation des clients, détectez vos meilleures ventes, prévoyez vos remplacements de fûts......'

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTag({ name: 'description', content: this.description });
    this.metaService.addTag({ name: 'google-site-verification', content: "cC_4F0X97u0UnxIw51FSZiOh9sFAAUcM_T-pWojsH6E" });
  }


}

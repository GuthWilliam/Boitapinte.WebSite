import { Component } from '@angular/core';

@Component({
  selector: 'bap-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  emailcontent= `mailto:contact@boitapinte.fr?Subject=Contact&body=Bonjour,
  %0D%0A%0D%0AJe souhaite vous contacter pour plus d'informations sur votre projet.`;

  constructor() { }

}

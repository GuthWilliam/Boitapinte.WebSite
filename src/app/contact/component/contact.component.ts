import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailingService } from '../mailing.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  contactForm: FormGroup;
  fullNameCtrl: FormControl;
  mailCtrl: FormControl;
  phoneCtrl: FormControl;
  contentCtrl: FormControl;

  constructor(fb: FormBuilder, private mailingService: MailingService) {
    this.fullNameCtrl = fb.control('', [Validators.required]);
    this.mailCtrl = fb.control('', [Validators.required, Validators.email]);
    this.phoneCtrl = fb.control('', [Validators.required, Validators.pattern('^0[1-9]([-. ]?[0-9]{2}){4}$')]);
    this.contentCtrl = fb.control('', [Validators.required, Validators.minLength(10)]);
    this.contentCtrl.setValue('Bonjour,\n\nJe souhaite vous contacter pour avoir plus d\'informations sur votre projet.');
    this.contactForm = fb.group({
      fullname: this.fullNameCtrl,
      mail: this.mailCtrl,
      phone: this.phoneCtrl,
      content: this.contentCtrl,
    })
  };

  mail(): void {
    this.mailingService.mail(this.fullNameCtrl.value, this.mailCtrl.value, this.phoneCtrl.value, this.contentCtrl.value);
  }
}


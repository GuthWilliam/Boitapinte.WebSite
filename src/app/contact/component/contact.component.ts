import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailingService } from '../mailing.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  fullNameCtrl: FormControl;
  mailCtrl: FormControl;
  phoneCtrl: FormControl;
  messageCtrl: FormControl;

  constructor(fb: FormBuilder, private mailingService: MailingService) {
    this.fullNameCtrl = fb.control('', Validators.required);
    this.mailCtrl = fb.control('', [Validators.required, Validators.email]);
    this.phoneCtrl = fb.control('', [Validators.required, Validators.pattern('^0[1-9]([-. ]?[0-9]{2}){4}$')]);
    this.messageCtrl = fb.control('', [Validators.required, Validators.minLength(10)]);
    this.contactForm = fb.group({
      fullname: this.fullNameCtrl,
      mail: this.mailCtrl,
      phone: this.phoneCtrl,
      message: this.messageCtrl,
    })
  }
  
  ngOnInit(): void {
    this.messageCtrl.setValue('Bonjour,\n\nJe souhaite vous contacter pour avoir plus d\'informations sur votre projet.');
  };

  mail(): void {
    this.mailingService.mail(this.fullNameCtrl.value, this.mailCtrl.value, this.phoneCtrl.value, this.messageCtrl.value);
  }
}


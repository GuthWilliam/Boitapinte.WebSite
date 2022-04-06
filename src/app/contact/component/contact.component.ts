import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailingService } from '../mailing.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  HasError: boolean | null = null;
  isLoading: boolean = false;
  errorMessage: String | null = null;
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
    this.contactForm.markAllAsTouched();
    if (!this.contactForm.valid) {
      this.fullNameCtrl.markAsDirty();
      this.mailCtrl.markAsDirty();
      this.phoneCtrl.markAsDirty();
      return;
    }
    this.isLoading = true;
    this.mailingService.mail(this.fullNameCtrl.value, this.mailCtrl.value, this.phoneCtrl.value, this.messageCtrl.value)
      .subscribe({
        next: (v) => {
          console.log(v);
          this.isLoading = false;
          if (v == '') {
            this.HasError = false;
            this.contactForm.reset();
            this.errorMessage = null;
          } else {
            this.HasError = true;
            this.errorMessage = v;
          }
        },
        error: (e) => {
          console.error(e);
          this.HasError = true;
          this.errorMessage = e;
        }
      });
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }
}


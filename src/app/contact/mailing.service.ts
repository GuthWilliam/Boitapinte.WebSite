import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScriptService } from '../shared/services/script.service';

declare var Email: any;
declare var smtpjsMessage: any;

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor(private scriptService: ScriptService) {
    this.scriptService.load('smtpjs').then(data => {
      console.log('script loaded ', data);
    }).catch(error => console.log(error));
  }


  mail(sender: string, mail: string, phoneNumber: string, message: string): Observable<String> {
    return new Observable<String>(subscriber => {
      //https://smtpjs.com/
      Email.send({
        Host: "ssl0.ovh.net",
        Username: "siteweb@boitapinte.fr",
        Password: "$b;BVaDx:~A=T+7Ll^YL",
        To: 'contact@boitapinte.fr',
        From: "siteweb@boitapinte.fr",
        Subject: "Contact depuis le site",
        Body: "Envoyé depuis le formulaire de contact : boitapinte " + "<br>"
          + "Nom : " + sender + "<br>"
          + "Mail : " + mail + "<br>"
          + "Téléphone : " + phoneNumber + "<br>"
          + "Message : "+ "<br>" + message,
      }).then(
        (smtpjsMessage: any) => {
          if (smtpjsMessage == 'OK') {
            subscriber.next('');
          }
          else {
            subscriber.next(smtpjsMessage);
          }
          return subscriber.complete();;
        }
      );
    });
  }

}

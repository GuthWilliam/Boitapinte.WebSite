import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor() { }

  mail(sender: string, mail: string, phoneNumber : string, message: string) : void {
    console.log(sender + " " + mail + " " + phoneNumber + " " + message);
  }
}

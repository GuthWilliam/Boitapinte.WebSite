import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

declare var Email: any;
declare var smtpjsMessage: any;

@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor(private http: HttpClient) {
  }


  mail(sender: string, mail: string, phoneNumber: string, message: string): Observable<any> {

    const obj = {
      sender: sender,
      mail: mail,
      phone: phoneNumber,
      message: message
    };

    return this.http.post(`${environment.mailUrl}`, obj, { responseType: 'text' });

  }

}

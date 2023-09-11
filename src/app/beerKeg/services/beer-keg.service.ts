import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerKegService {

  private apiUrl = 'https://boitapinte.fr/Api/index.php/BeerKegRefill';

  constructor(private http: HttpClient) { }

  getBeerKegRefills() {
    return this.http.get(this.apiUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { BeerKegService } from '../../services/beer-keg.service'
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'bap-beer-keg',
  templateUrl: './beer-keg.component.html',
  styleUrls: ['./beer-keg.component.css']
})
export class BeerKegComponent implements OnInit {

  refills: any[] = [];

  constructor(private beerKegService: BeerKegService, private decimalPipe: DecimalPipe) { }

  ngOnInit(): void {
    this.beerKegService.getBeerKegRefills().subscribe({
      next: (data: any) => {
        this.refills = data;
      },
      error: error => {
        console.error('Error fetching data', error);
      }
    });

  }

  roundToTwoDecimals(value: number): string | null {
    return this.decimalPipe.transform(value, '1.2-2');
}

}

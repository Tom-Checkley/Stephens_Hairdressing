import { Component, OnInit } from '@angular/core';
import { GetPricesService } from '../../../shared/services/get-prices.service';
import { Prices } from '../../../shared/models/prices';

@Component({
    selector: 'app-prices',
    templateUrl: './prices.component.html',
    styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
    loading: boolean = true;
    prices: Prices;

    constructor(private getPricesService: GetPricesService) { }

    ngOnInit(): void {
        this.getPricesService.getPrices().subscribe(res => {
            const data: any = res.payload.data();
            this.prices = data;
            setTimeout(() => {
                this.loading = false;
            })
        })
    }

}

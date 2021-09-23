import { Component, OnInit } from '@angular/core';
import { Prices } from 'src/app/modules/shared/models/prices';
import { Service } from 'src/app/modules/shared/models/service';
import { PricingGroup } from '../../../../shared/models/pricing-group';
import { GetPricesService } from '../../../../shared/services/get-prices.service';
import { EditPricesService } from '../../../services/edit-prices.service';

@Component({
  selector: 'app-edit-prices',
  templateUrl: './edit-prices.component.html',
  styleUrls: ['./edit-prices.component.scss']
})
export class EditPricesComponent implements OnInit {
    loading: boolean = true;
    prices: Prices;

    constructor(
        private getPricesService: GetPricesService,
        private editPricesService: EditPricesService
    ) { }

    ngOnInit(): void {
        this.getPricesService.getPrices().subscribe(res => {
            const data: any = res.payload.data();
            this.prices = data;
            this.prices.priceGroups.forEach(group => {
                group.groupNameEditing = false;
            });
            setTimeout(() => {
                this.loading = false;
            }, 300);
        })
    }

    savePrices() {
        this.editPricesService.editPrices(this.prices);
    }

    createGroup() {
        const newGroup: PricingGroup = {
            name: '',
            services: []
        };
        this.prices.priceGroups.push(newGroup);
    }

    addService(group: PricingGroup): void {
        const newService: Service = {
            name: '',
            price: 0,
            priceIsFrom: false
        };
        group.services.push(newService);
    }

    isGroupNameEditing(group: PricingGroup) {
        group.groupNameEditing = !group.groupNameEditing;
    }
}

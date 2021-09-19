import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/modules/shared/models/service';
import { PricingGroup } from '../../../../shared/models/pricing-group';
import { GetPricesService } from '../../../../shared/services/get-prices.service';

@Component({
  selector: 'app-edit-prices',
  templateUrl: './edit-prices.component.html',
  styleUrls: ['./edit-prices.component.scss']
})
export class EditPricesComponent implements OnInit {
    prices: [PricingGroup];

    constructor(
        private getPricesService: GetPricesService
    ) { }

    ngOnInit(): void {
        this.getPricesService.getPrices().subscribe(res => {
            const data: any = res.payload.data();
            this.prices = data.priceGroups;
            this.prices.forEach(group => {
                group.groupNameEditing = false;
            })
        })
    }

    savePrices() {

    }

    createGroup() {
        const newGroup: PricingGroup = {
            name: '',
            services: []
        };
        this.prices.push(newGroup);
        console.log(this.prices);
    }

    addService(group: PricingGroup): void {
        const newService: Service = {
            name: '',
            price: 0
        };
        group.services.push(newService);
    }

    isGroupNameEditing(group: PricingGroup) {
        group.groupNameEditing = !group.groupNameEditing;
    }
}

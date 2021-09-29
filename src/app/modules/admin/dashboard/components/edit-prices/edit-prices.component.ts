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
    prices: Prices;
    loading: boolean = true;
    erroredOnSave: boolean = false;
    savedSuccess: boolean = false;

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
        this.editPricesService.editPrices(this.prices)
            .then(() => {
                this.erroredOnSave = false;
                this.savedSuccess = true;
                this.loading = false;
            })
            .catch(err => {
                console.error(err);
                this.erroredOnSave = true;
                this.savedSuccess = false;
                this.loading = false;
            })
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

    showForm() {
        this.savedSuccess = false;
        this.erroredOnSave = false;
    }
}

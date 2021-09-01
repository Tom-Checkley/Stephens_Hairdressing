import { Component, OnInit } from '@angular/core';
import { OpeningHours } from '../../../shared/models/opening-hours';
import { GetOpeningHoursService } from '../../../shared/services/get-opening-hours.service';

@Component({
  selector: 'app-opening-hours',
  templateUrl: './opening-hours.component.html',
  styleUrls: ['./opening-hours.component.scss']
})
export class OpeningHoursComponent implements OnInit {
    openingHours: [OpeningHours]; 

    constructor(private openingHoursService: GetOpeningHoursService) { }

    ngOnInit(): void {
        this.onInit();
    }

    onInit() {
        this.openingHoursService.getOpeningHours()?.subscribe(res => {
            const data: any = res.payload.data();
            this.openingHours = data.days;
        })
    }

}

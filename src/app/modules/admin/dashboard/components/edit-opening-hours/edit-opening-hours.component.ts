import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OpeningHours } from 'src/app/modules/shared/models/opening-hours';
import { GetOpeningHoursService } from '../../../../shared/services/get-opening-hours.service';
import { EditOpeningHoursService } from '../../../services/edit-opening-hours.service';

@Component({
  selector: 'app-edit-opening-hours',
  templateUrl: './edit-opening-hours.component.html',
  styleUrls: ['./edit-opening-hours.component.scss']
})
export class EditOpeningHoursComponent implements OnInit {
    openingHours: [OpeningHours];

    constructor(
        private getOpeningHoursService: GetOpeningHoursService,
        private editOpeningHoursService: EditOpeningHoursService
    ) { }

    ngOnInit(): void {
        
        this.getOpeningHoursService.getOpeningHours().subscribe(res => {
            const data: any = res.payload.data();
            this.openingHours = data.days;
        });
    }

    saveOpeningHours() {
        const updatedOpeningHours = {
            days: this.openingHours
        }
        this.editOpeningHoursService.editOpeningHours(updatedOpeningHours);
    }

}

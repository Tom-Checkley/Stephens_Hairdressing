import { Component, OnInit } from '@angular/core';
import { OpeningHours } from 'src/app/modules/shared/models/opening-hours';
import { GetOpeningHoursService } from '../../../../shared/services/get-opening-hours.service';
import { EditOpeningHoursService } from '../../../services/edit-opening-hours.service';

@Component({
  selector: 'app-edit-opening-hours',
  templateUrl: './edit-opening-hours.component.html',
  styleUrls: ['./edit-opening-hours.component.scss']
})
export class EditOpeningHoursComponent implements OnInit {
    loading: boolean = true;
    openingHours: [OpeningHours];
    erroredOnSave: boolean = false;
    savedSuccess: boolean = false;

    constructor(
        private getOpeningHoursService: GetOpeningHoursService,
        private editOpeningHoursService: EditOpeningHoursService
    ) { }

    ngOnInit(): void {
        
        this.getOpeningHoursService.getOpeningHours().subscribe(res => {
            const data: any = res.payload.data();
            this.openingHours = data.days;
            
            setTimeout(() => {
                this.loading = false;
            }, 300);
        });
    }

    saveOpeningHours() {
        this.loading = true;
        const updatedOpeningHours = {
            days: this.openingHours
        }
        this.editOpeningHoursService.editOpeningHours(updatedOpeningHours)
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

    onClosedToggle(day: OpeningHours): void {
        if (day.closed) {
            day.open = '';
            day.close = '';
        }
    }

    showForm() {
        this.savedSuccess = false;
        this.erroredOnSave = false;
    }

}

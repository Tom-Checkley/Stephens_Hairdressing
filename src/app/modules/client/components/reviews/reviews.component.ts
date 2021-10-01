import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../../shared/services/reviews.service';

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

    constructor(private reviewsService: ReviewsService) { }

    ngOnInit(): void {
        this.reviewsService.getReviews().subscribe(res => {
            console.log(res);
        })
    }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ReviewsService {

    constructor(private http: HttpClient) { }

    getReviews() {
        return this.http.get('https://us-central1-stephen-sheppard-hairdressing.cloudfunctions.net/reviewsApi');
    }


}

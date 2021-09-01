import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    founded: Date = new Date(1983, 0, 1);
    now: Date = new Date(Date.now());
    yearsExperience: number;

    constructor() { }

    ngOnInit(): void {
        this.yearsExperience = this.now.getFullYear() - this.founded.getFullYear();
    }

}

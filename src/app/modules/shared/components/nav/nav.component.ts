import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
    @Input() classModifier: string;
    cssClass: string;

    constructor() { }

    ngOnInit(): void {
        this.cssClass = `nav--${ this.classModifier }`;
    }

}

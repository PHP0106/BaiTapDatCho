import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-template',
    template: `
        <app-header-home></app-header-home>
        Home template
        <router-outlet></router-outlet>
    
    `
})

export class HomeTemPlateComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
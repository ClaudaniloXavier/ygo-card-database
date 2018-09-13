import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
    menu: any;
    events: string[] = [];
    opened: boolean;

    constructor(private router: Router) {
        this.menu = [
            {
                name: 'Ínicio',
                icon: 'home',
                color: '#546E7A',
                route: ''
            },
            {
                name: 'Cards',
                icon: 'image',
                color: '#1E88E5',
                route: '/cards'
            },
            {
                name: 'Sets',
                icon: 'filter',
                color: '#009688',
                route: '/sets'
            },
            {
                name: 'Banlist',
                icon: 'block',
                color: '#EF5350',
                route: '/banlist'
            }
        ];
    }

    ngOnInit() {

    }

    goTo(item) {
        console.log(item);
        this.router.navigate([item.route]);
    }
}

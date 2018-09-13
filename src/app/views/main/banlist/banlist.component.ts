import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-banlist',
    templateUrl: './banlist.component.html',
    styleUrls: ['./banlist.component.scss']
})

export class BanlistComponent implements OnInit {
    auxLists: any;
    banlists: any;
    panelOpenState = false;

    constructor(private http: HttpClient) {
        this.auxLists = [];

        this.banlists = {
            advanced: {
                ocg: [],
                tcg: []
            },
            traditional: {
                tcg: []
            }
        };
    }

    ngOnInit() {
        this.getBanlist();
    }

    getBanlist() {
        this.http
            .request('GET', environment.BANLIST_API, {responseType: 'json'})
            .toPromise()
            .then(res => {
                this.auxLists = res;
                const advancedOcg = this.auxLists.banlists.Advanced.OCG;
                const advancedTcg = this.auxLists.banlists.Advanced.TCG;
                const traditionalTcg = this.auxLists.banlists.Traditional.TCG;

                Object.keys(advancedOcg).map(key => {
                    advancedOcg[key].startDate = key;
                });

                Object.keys(advancedTcg).map(key => {
                    advancedTcg[key].startDate = key;
                });

                Object.keys(traditionalTcg).map(key => {
                   traditionalTcg[key].startDate = key;
                });

                this.banlists.advanced.ocg = Object.values(advancedOcg);
                this.banlists.advanced.tcg = Object.values(advancedTcg);
                this.banlists.traditional.tcg = Object.values(traditionalTcg);

                console.log(this.banlists);
            }, err => {
                console.log(err);
            });
    }

    transformIntoArray(object) {
        console.log(object);
    }
}

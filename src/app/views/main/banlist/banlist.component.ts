import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-banlist',
    templateUrl: './banlist.component.html',
    styleUrls: ['./banlist.component.scss']
})

export class BanlistComponent implements OnInit {
    auxLists: any;
    banlists: any;
    loading: boolean;
    panelOpenState = false;

    constructor(private http: HttpClient, private snackbar: MatSnackBar) {
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
        this.loading = true;
        this.http
            .request('GET', environment.BANLIST_API, {responseType: 'json'})
            .toPromise()
            .then(res => {
                this.auxLists = res;
                const advancedOcg = this.auxLists.banlists.Advanced.OCG;
                const advancedTcg = this.auxLists.banlists.Advanced.TCG;
                const traditionalTcg = this.auxLists.banlists.Traditional.TCG;

                Object.keys(advancedOcg).map(key => {
                    advancedOcg[key].start_date = key;
                });

                Object.keys(advancedTcg).map(key => {
                    advancedTcg[key].start_date = key;
                });

                Object.keys(traditionalTcg).map(key => {
                   traditionalTcg[key].start_date = key;
                });

                this.banlists.advanced.ocg = Object.values(advancedOcg).reverse();
                this.banlists.advanced.tcg = Object.values(advancedTcg).reverse();
                this.banlists.traditional.tcg = Object.values(traditionalTcg).reverse();

                this.loading = false;
            }, err => {
                console.log(err);
                this.loading = false;
            });
    }
}

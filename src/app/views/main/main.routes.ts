import {Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {HOME_ROUTES} from './home/home.routes';
import {BANLIST_ROUTES} from './banlist/banlist.routes';
import {CARDS_ROUTES} from './cards/cards.routes';
import {SETS_ROUTES} from './sets/sets.routes';

export const MAIN_ROUTES: Routes = [{
    path: '',
    component: MainComponent,
    children: [
        ...HOME_ROUTES,
        ...BANLIST_ROUTES,
        ...CARDS_ROUTES,
        ...SETS_ROUTES
    ]
}];

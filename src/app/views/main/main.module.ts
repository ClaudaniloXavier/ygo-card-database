import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';
import {BanlistModule} from './banlist/banlist.module';
import {CardsModule} from './cards/cards.module';
import {SetsModule} from './sets/sets.module';
import {SharedModule} from '../shared.module';


@NgModule({
    imports: [
        HomeModule,
        BanlistModule,
        CardsModule,
        SetsModule,
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        SharedModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [],
    declarations: [MainComponent],
    providers: []
})

export class MainModule {

}

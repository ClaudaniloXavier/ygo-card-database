import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BanlistComponent} from './banlist.component';
import {MatTabsModule, MatExpansionModule, MatListModule, MatIconModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatTabsModule,
        MatExpansionModule,
        MatListModule,
        MatIconModule
    ],
    exports: [],
    declarations: [BanlistComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: []
})

export class BanlistModule {

}

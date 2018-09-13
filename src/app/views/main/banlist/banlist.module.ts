import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BanlistComponent} from './banlist.component';
import {MatTabsModule, MatExpansionModule, MatListModule, MatIconModule, MatDividerModule, MatSnackBarModule, MatProgressBarModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatTabsModule,
        MatExpansionModule,
        MatListModule,
        MatIconModule,
        MatDividerModule,
        MatSnackBarModule,
        MatProgressBarModule
    ],
    exports: [],
    declarations: [BanlistComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: []
})

export class BanlistModule {

}

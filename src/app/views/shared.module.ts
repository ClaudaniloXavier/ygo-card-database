import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [],
    exports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [],
    bootstrap: []
})
export class SharedModule {
}

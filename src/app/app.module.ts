import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainModule} from './views/main/main.module';
import {AppRoutes} from './app.routes';
import {SharedModule} from './views/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutes,
        BrowserModule,
        BrowserAnimationsModule,
        MainModule,
        SharedModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

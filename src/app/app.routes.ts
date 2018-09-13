import {RouterModule, Routes} from '@angular/router';
import {MAIN_ROUTES} from './views/main/main.routes';
import {NgModule} from '@angular/core';

const routes: Routes = [
    ...MAIN_ROUTES
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutes {

}

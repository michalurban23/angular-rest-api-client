import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "../error/page-not-found/page-not-found.component"

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full', runGuardsAndResolvers: 'always' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

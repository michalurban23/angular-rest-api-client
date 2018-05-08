import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeRoutingModule } from './home-routing/home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    declarations: [
        NavBarComponent,
        SideBarComponent,
        MainComponent,
        FooterComponent
    ],
    exports: [
        NavBarComponent,
        SideBarComponent,
        FooterComponent,
        MainComponent,
    ]
})
export class HomeModule { }

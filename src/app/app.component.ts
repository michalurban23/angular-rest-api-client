import { Component } from '@angular/core';
import { environment } from "../environments/environment"
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'Flight Connector API Client';

    ngOnInit() {
        this.fixNavbar();
    }

    fixNavbar() {
        $(document).ready(function() {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 70) {
                    $('.topnav').addClass('navbar-fixed');
                } else {
                    $('.topnav').removeClass('navbar-fixed');
                }
            });
        });
    }
}

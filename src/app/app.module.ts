import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerticalNavbarComponent } from './main/vertical-navbar/vertical-navbar.component';
import { HorizontalNavbarComponent } from './main/horizontal-navbar/horizontal-navbar.component';
import { PortfolioOverviewComponent } from './main/portfolio-overview/portfolio-overview.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    VerticalNavbarComponent,
    HorizontalNavbarComponent,
    PortfolioOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

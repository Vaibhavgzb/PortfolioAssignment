import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioOverviewComponent } from './main/portfolio-overview/portfolio-overview.component';

const routes: Routes = [
  {
    path : '',
    component : PortfolioOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

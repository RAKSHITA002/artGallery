import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchbarComponent } from './searchbar/searchbar.component';


const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path : "view-more/:id",
    component : ViewMoreComponent
  },
  {
    path : "wishlist",
    component : WishlistComponent
  },
 {
    path : "",
    component : HomeComponent
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

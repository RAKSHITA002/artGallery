import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  wishlist : Array<any> = [];
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private service:ApiCallService) {
        this.activatedRoute.params.subscribe((params)=>{
          const id = params['id'];
        });

    this.wishlist = this.service.getWishlist();
    console.log(this.wishlist);
  }

  removeItem(item : any){
    const index = this.wishlist.indexOf(item);
    if (index !== -1) {
      this.wishlist.splice(index, 1);
    }
  }
  
 

}

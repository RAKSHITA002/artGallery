import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyModel } from './model';
import {Observable} from 'rxjs'
import { NgxPaginationModule } from 'ngx-pagination';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http : HttpClient) { }

  getSomeData(pageNo : number): Observable<MyModel[]>{
    return this.http.get<MyModel[]>(`https://api.artic.edu/api/v1/artworks?page=${pageNo}&limit=100`);
  }

  searchItem(itemname : string) :Observable<any>{
    return this.http.get(`https://api.artic.edu/api/v1/artworks/search?q=${itemname}`)
    .pipe(map((response : any)=>{
      console.log(response);
   return response;}
     
     ));
   
  }

  wishlist : Array<any> = [];

  addToWishlist(item : any) {
    this.wishlist.push(item);
  }

  getWishlist() {
    return this.wishlist;
  }


}

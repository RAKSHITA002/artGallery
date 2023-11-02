import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import {Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms'
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


// export class DashboardComponent {
//   artData : any[] = [];
//   totalRecords: number = 0;
//   page : number = 1;

  
//   constructor(private service: ApiCallService, private router : Router, private activeRoute : ActivatedRoute) {
        
   
//     }

//     ngOnInit() : void{
//       this.getData();
//     }

//     getData(){
//       this.service.getSomeData(this.page).subscribe(
//         (data: any) => {
//           this.artData =data.data;
//           this.totalRecords = data.pagination.total;
//           console.log(data);
//           this.page = data.pagination.current_page;
//         });
//       }

//     prev() : void{
//       if(this.page > 1){
//         this.page -=1;
//       }
//       this.getData()
//     }

//     next() : void {
//       this.page += 1;
//     }

//     viewMore(id: number) {
//       this.router.navigate(['view-more', id]);
//     }

//     addToWishlist(item : any) {
//       this.service.addToWishlist(item);
//     }


//     //for searching item
    

//   }

export class DashboardComponent {
  artData : any[] = [];
  totalRecords: number = 0;
  page : number = 1;

  private subjectKeyUp = new Subject<any>();

  art$ : any;

  constructor(private service: ApiCallService, private router : Router, private activeRoute : ActivatedRoute) { }
        
  ngOnInit() : void{
    this.getData();
     this.subjectKeyUp.pipe(debounceTime(1000)).subscribe((response) =>{
      console.log(response);
      this.searchItem(response);
    })
  }

  getData() {
    this.service.getSomeData(this.page).subscribe(
      (data: any) => {
        this.artData = data.data;
        this.totalRecords = data.pagination.total;
        console.log(data);
        this.page = data.pagination.current_page;
      });
  }

  viewMore(id: number) {
    this.router.navigate(['view-more', id]);
  }

  addToWishlist(item : any) {
    this.service.addToWishlist(item);
  }

  //search function

  onSearch($event : any){
   const value =$event.target.value;
  /*  console.log(value); */
   /* this.searchItem(value); */
   this.subjectKeyUp.next(value);
  }
  filterData : Array<any> = [];

  searchItem(itemname : string){
    this.art$ =this.service.searchItem(itemname).subscribe((response) =>{
      console.log(response.data);
      this.filterData = response.data;
      },
       (error) => {
        console.log(error);
      }); 
  }


}

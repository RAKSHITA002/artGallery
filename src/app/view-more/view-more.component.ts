import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent{
  artwork: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.http.get(`https://api.artic.edu/api/v1/artworks/${id}`).subscribe((response: any) => {
        this.artwork = response.data
      });
    });
   }

}


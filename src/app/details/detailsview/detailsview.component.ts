import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WalmartProductsService } from '../../walmart-products.service';

@Component({
  selector: 'app-detailsview',
  templateUrl: './detailsview.component.html',
  styleUrls: ['./detailsview.component.css']
})
export class DetailsviewComponent implements OnInit {
  id: string;
  rating: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private walmartProducts: WalmartProductsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.walmartProducts.getReviews(this.id)
        .subscribe(result => {
          this.rating = result.json();
          console.log(this.rating);
        });
    });
  }

}

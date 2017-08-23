import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WalmartProductsService } from '../../walmart-products.service';
import { Pokemon } from '../../pokemon.model';

@Component({
  selector: 'app-detailsview',
  templateUrl: './detailsview.component.html',
  styleUrls: ['./detailsview.component.css']
})
export class DetailsviewComponent implements OnInit {
  id: number;
  rating: any;
  pokemon: Pokemon;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private walmartProducts: WalmartProductsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));
      this.walmartProducts.get(this.id)
        .then((details) => {
          this.pokemon = details;
        });
      // this.walmartProducts.getReviews(this.id)
      //   .subscribe((result: any) => {
      //     this.rating = result;
      //     console.log(this.rating);
      //   });
    });
  }

}

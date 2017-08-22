import { Component, OnInit } from '@angular/core';
import { WalmartProductsService } from '../walmart-products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private walmartProducts: WalmartProductsService) { }

  ngOnInit() {
    this.walmartProducts.getTrendingProducts().subscribe((items) => {
      console.log(items);
    });
  }

}

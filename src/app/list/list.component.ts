import { Component, OnInit } from '@angular/core';
import { WalmartProductsService } from '../walmart-products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  phones: any[];

  constructor(private walmartProducts: WalmartProductsService) { }

  ngOnInit() {
    this.walmartProducts.getPhones().subscribe((response) => {
      this.phones = response.json().items;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { WalmartProductsService } from '../walmart-products.service';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //phones: any[];
  pokemons: Pokemon[];

  constructor(private walmartProducts: WalmartProductsService) { }

  ngOnInit() {
    this.walmartProducts.list().then((r) => {
      this.pokemons = r;
    });
    // this.walmartProducts.getPhones().subscribe((response: any) => {
    //   this.phones = response.items;
    // });
  }

}

import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

@Injectable()
export class WalmartProductsService {

  private apiKey: string;

  constructor(private jsonp: Jsonp) { 
    this.apiKey = '82hnvnssmhtxwywwzrsys9yq';
  }

  getTrendingProducts(){
    return this.jsonp.get(`http://api.walmartlabs.com/v1/trends?apiKey=${this.apiKey}`);
  }

  getReviews(itemId: string){
    return this.jsonp.get(`http://api.walmartlabs.com/v1/reviews/${itemId}?format=json&apiKey=${this.apiKey}`);
  }
}

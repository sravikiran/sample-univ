import { Injectable } from '@angular/core';
import { Jsonp, Http, URLSearchParams } from '@angular/http';

@Injectable()
export class WalmartProductsService {

  private apiKey: string;

  constructor(private jsonp: Jsonp,
    private http: Http) {
    this.apiKey = '82hnvnssmhtxwywwzrsys9yq';
  }

  getPhones() {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    params.set('apiKey', this.apiKey);
    params.set('format', 'json');

    return this.jsonp.get(`http://api.walmartlabs.com/v1/search?query=phone`, { search: params });
  }

  getReviews(itemId: string) {
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    params.set('apiKey', this.apiKey);
    params.set('format', 'json');

    return this.jsonp.get(`http://api.walmartlabs.com/v1/reviews/${itemId}`, { search: params });
  }
}

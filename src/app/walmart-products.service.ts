import { Injectable } from '@angular/core';
//import { Jsonp, URLSearchParams } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon.model';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class WalmartProductsService {

  private apiKey: string;

  constructor(
    // private jsonp: Jsonp,
     private httpClient: HttpClient
  ) {
    this.apiKey = '82hnvnssmhtxwywwzrsys9yq';
  }

  // getPhones() {
  //   let hParams = new HttpParams();
  //   hParams.set('callback', 'JSONP_CALLBACK');
  //   hParams.set('apiKey', this.apiKey);
  //   hParams.set('format', 'json');

  //   let params = new URLSearchParams();
  //   params.set('callback', 'JSONP_CALLBACK');
  //   params.set('apiKey', this.apiKey);
  //   params.set('format', 'json');

  //   // this.httpClient.get('https://api.github.com/organizations')
  //   //   .subscribe(r => {
  //   //     console.log(r);
  //   //   });

  //   return this.httpClient.jsonp(`http://api.walmartlabs.com/v1/search?query=phone&apiKey=${this.apiKey}&format=json`, 'callback');
  // }

  // getReviews(itemId: string) {
  //   let hParams = new HttpParams();
  //   hParams.set('callback', 'JSONP_CALLBACK');
  //   hParams.set('apiKey', this.apiKey);
  //   hParams.set('format', 'json');

  //   let params = new URLSearchParams();
  //   params.set('callback', 'JSONP_CALLBACK');
  //   params.set('apiKey', this.apiKey);
  //   params.set('format', 'json');

  //   return this.httpClient.jsonp(`http://api.walmartlabs.com/v1/reviews/${itemId}?apiKey=${this.apiKey}&format=json`, 'callback');
  // }

  list() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    return this.httpClient.get("https://pokeapi.co/api/v2/pokedex/1/", {
      headers
    })
      .toPromise()
      .then((res: any) => {
        let allPokemon = [];

        res.pokemon_entries.forEach((entry) => {
          let pokemon = new Pokemon();
          pokemon.name = entry.pokemon_species.name;
          pokemon.id = entry.entry_number;
          allPokemon.push(pokemon);
        });
        return allPokemon;
      });
  }

  get(id: number) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
      headers: headers
    })
      .toPromise()
      .then((res: any) => {
        
        let pokemon = new Pokemon();
        pokemon.name = res.name;
        pokemon.id = res.id;

        res.types.forEach((eachType) => {
          pokemon.types.push(eachType.type.name);
        });

        res.stats.forEach((eachStat) => {
          pokemon.stats.push({
            name: eachStat.stat.name,
            value: eachStat.base_stat
          });
        });

        return pokemon;
      });
  }
}

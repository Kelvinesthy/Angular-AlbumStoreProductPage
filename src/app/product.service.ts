import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Album } from "./album";
import { Product } from "./product";

import 'rxjs/add/operator/map'
@Injectable()
export class ProductService {
  private _privatesUrl = '../assets/products.json'
  private _albumUrl = '../assets/album.json';


  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album>{
    return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }

  getProducts(){
    this._http.get(this._privatesUrl).map((response) => <Product[]>response.json());
    return Observable<Product[]>
  }
}

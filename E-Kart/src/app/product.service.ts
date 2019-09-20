import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductService {
postProductURL = "http://localhost:3000/product/addlaptop"
getProductURL = "http://localhost:3000/product/showlaptop"
putProductURL = "http://localhost:3000/product/updatelaptop"
deleteProductURL = "http://localhost:3000/product/deletelaptop"
  selectedProduct: Product;
  product: Product[];

  constructor(private http: HttpClient) { }

  postProduct(product : Product){
    return this.http.post<any>(this.postProductURL, product)
  }

  getProduct(){
    return this.http.get<any>(this.getProductURL)
  }

  putProduct(product : Product){
    return this.http.put(this.putProductURL + `/${product._id}`, product)
  }

  deleteProduct(_id : string){
    return this.http.delete(this.deleteProductURL + `/${_id}`)
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import { Cart } from './cart.model';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductService {
postProductURL = "http://localhost:3000/product/addlaptop"
getProductURL = "http://localhost:3000/product/showlaptop"
putProductURL = "http://localhost:3000/product/updatelaptop"
deleteProductURL = "http://localhost:3000/product/deletelaptop"
addCartURL = "http://localhost:3000/product/addcart"
getCartURL = "http://localhost:3000/product/getcart"
deleteCartURL = "http://localhost:3000/product/deletecart"
putCartURL = "http://localhost:3000/product/updatecart"

  selectedProduct: Product;
  product: Product[];

  constructor(private http: HttpClient,) { }
  userid = { userId:localStorage.getItem('userId')}

  postProduct(product : Product){
    return this.http.post<any>(this.postProductURL, product)
  }

  getSingleProduct(_id: String){
    return this.http.get<any>(this.getProductURL + `/${_id}`)
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

  addToCartApi(id){
    return this.http.post(this.addCartURL + `/${id}`,{userId:this.userid})
  }

  getCart(){
    return this.http.post<any>(this.getCartURL,{userId:this.userid})
  }
  deleteCart(_id : string){
    return this.http.delete(this.deleteCartURL + `/${_id}`)
  }
}

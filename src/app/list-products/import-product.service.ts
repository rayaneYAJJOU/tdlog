import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ImportProductService {

  constructor(private httpClient :HttpClient) { }
  getAllProduct (){
    return this.httpClient.get('https://dummyjson.com/products')

    }
  getProductCategories(){
    return this.httpClient.get('https://dummyjson.com/products/categories')
  }
  getProductByCategory(text:String){
    return this.httpClient.get(`https://dummyjson.com/products/category/${text}`)
  }
  getProductbySearch(text:String){
    return this.httpClient.get(`https://dummyjson.com/products/search?q=${text}`)
  }
  
}

import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ImportProductService } from './import-product.service';
import { Product } from '../../modules/Product';
import { NgFor } from '@angular/common';
import { error } from 'console';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ProductItemComponent,NgFor],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent implements OnInit {
  products !:Array<Product>;
  textInSerach !:string;
  selectedCategory :string='';
  constructor(private importProductService :ImportProductService,private searchService :SearchService){}

  ngOnInit(): any { 
      this.importProductService.getAllProduct().subscribe((response:any)=>{
          this.products=response.products;
      },(error)=>{console.error('Error fetching products', error);  })
      
      this.recvoirText();
      this.recevoirCategory(); 
      
  }
  recevoirCategory():void{
    this.searchService.envoyerCategorie().subscribe((res:any)=>{
      this.selectedCategory=res;
      console.log(res);
      this.serchCatProduct();
    },(error)=>{console.error('Error fetching products', error);  })
  }
  recvoirText(): void {
    this.searchService.envoyerText().subscribe(
      (text: string) => {
        this.textInSerach = text; 
        
        this.serchProduct();
      },
      (error) => {
        console.log('Error fetching search text', error);
      }
    );
  }
  serchProduct(){
    this.importProductService.getProductbySearch(this.textInSerach).subscribe((response:any)=>{
      this.products=response.products;
      
    },(error)=>{console.log('error ftching',error); })
  }
  serchCatProduct(){
    this.importProductService.getProductByCategory(this.selectedCategory).subscribe((res:any)=>{
      this.products=res.products;
    },(error)=>{console.error('Error fetching products', error);  })
  }

}

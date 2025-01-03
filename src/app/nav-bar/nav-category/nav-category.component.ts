import {Component  } from '@angular/core';
import { NgIf,NgFor } from '@angular/common';
import { ImportProductService } from '../../list-products/import-product.service';
import { OnInit } from '@angular/core';
import { SearchService } from '../../search.service';
@Component({
  selector: 'app-nav-category',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './nav-category.component.html',
  styleUrl: './nav-category.component.scss'
})
export class NavCategoryComponent implements OnInit{
  dropDownOpen :boolean=false;
  categories:Array<any>=[]; 
  
  constructor(private importProductService :ImportProductService,private searchService:SearchService){}
  toggleDropdown(){
    this.dropDownOpen=!this.dropDownOpen;
  }
  ngOnInit():any{
    this.importProductService.getProductCategories().subscribe((resp:any)=>{
      this.categories=resp;
    
    })
  }
  sendCategory(category:string){
    
    this.searchService.recevoirCategorie(category)
    
  }
}

import { Component, OnInit } from '@angular/core';
import { PannierService } from '../pannier.service';
import { Product } from '../../modules/Product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export class DetailProductComponent implements OnInit {
  product!: Product;
  constructor(private pannierService:PannierService) {
    
  }
  ngOnInit(): void {
      this.pannierService.obtenirProduit().subscribe((res:any)=>{
        this.product=res.getValue();
        console.log("product received");
      });
      
  }
  

}

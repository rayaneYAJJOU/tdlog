import { Component, Input } from '@angular/core';
import { Product } from '../../modules/Product';
import { NgFor, NgIf } from '@angular/common';
import { PannierService } from '../pannier.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() products !:Array<Product>;
  constructor(private pannierService :PannierService){}
  envoyerProduit(p:Product){
    this.pannierService.ajouterProduit(p);
  }
  evoyerProduitForDes(p:Product){
    this.pannierService.ajouterProduitDes(p);
  }
}

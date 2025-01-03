import { Component, OnInit } from '@angular/core';
import { Product } from '../../modules/Product';
import { PannierService } from '../pannier.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-pannier',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './pannier.component.html',
  styleUrl: './pannier.component.scss'
})
export class PannierComponent implements OnInit{
  ligneCommande !: Map<number, { produit: Product, quantite: number }> 
  constructor(private pannierService : PannierService ) {}

  ngOnInit(): void {
      this.ligneCommande=this.pannierService.obtenirCommande();
  }
  calculateTotalPrice(): number {
    let total = 0;
    this.ligneCommande.forEach(ligne => {
      total += ligne.produit.price * ligne.quantite;
    });
    return total;
  }
  
  
}

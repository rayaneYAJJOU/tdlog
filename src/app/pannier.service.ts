import { Injectable } from '@angular/core';
import { Product } from '../modules/Product';
import { BehaviorSubject } from 'rxjs';

interface CommandeItem {
  id: number;
  produit: Product;
  quantite: number;
}

@Injectable({
  providedIn: 'root'
})
export class PannierService {
  ligneCommande: Map<number, { produit: Product, quantite: number }> = new Map();
  curentProduct!:Product;
  produitDes:BehaviorSubject<Product>=new BehaviorSubject(this.curentProduct);
  constructor() {
    this.chargerCommande(); 
  }

  ajouterProduit(produit: Product) {
    if (this.ligneCommande.has(produit.id)) {
      const ligne = this.ligneCommande.get(produit.id)!;
      ligne.quantite += 1;
    } else {
      this.ligneCommande.set(produit.id, { produit: produit, quantite: 1 });
    }
    console.log('Commande mise à jour :', this.ligneCommande);
    this.sauvegarderCommande(); 
  }

  produitExiste(id: number): boolean {
    return this.ligneCommande.has(id);
  }

  obtenirCommande(): Map<number, { produit: Product, quantite: number }> {
    return this.ligneCommande;
  }
  obtenirProduit(){
    return this.produitDes.asObservable();
  }
  ajouterProduitDes(p:Product)
{this.produitDes.next(p);
  console.log("produit descrip");
}
  private sauvegarderCommande() {
    const commandeArray: CommandeItem[] = Array.from(this.ligneCommande.entries()).map(([id, { produit, quantite }]) => ({
      id,
      produit,
      quantite
    }));
    sessionStorage.setItem('ligneCommande', JSON.stringify(commandeArray));
  }

  private chargerCommande() {
    const commandeJSON = sessionStorage.getItem('ligneCommande');
    if (commandeJSON) {
      const commandeArray: CommandeItem[] = JSON.parse(commandeJSON);
      commandeArray.forEach(({ id, produit, quantite }) => {
        this.ligneCommande.set(id, { produit, quantite });
      });
    }
  }
  Commander(){
    return this.ligneCommande
  }
}

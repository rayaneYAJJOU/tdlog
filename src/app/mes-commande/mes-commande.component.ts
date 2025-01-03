import { Component } from '@angular/core';
import { PannierService } from '../pannier.service';
import { ConnexionService } from '../connexion/connexion.service';

@Component({
  selector: 'app-mes-commande',
  standalone: true,
  imports: [],
  templateUrl: './mes-commande.component.html',
  styleUrl: './mes-commande.component.scss'
})
export class MesCommandeComponent {
  constructor(private connexion :ConnexionService){}
  
}

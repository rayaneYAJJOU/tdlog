import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SideBareComponent } from '../side-bare/side-bare.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PannierComponent } from '../pannier/pannier.component';
import { NavCategoryComponent } from './nav-category/nav-category.component';
import { RouterLink } from '@angular/router';
import { ConnexionService } from '../connexion/connexion.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SideBareComponent,PannierComponent, SearchBarComponent,NavCategoryComponent, RouterLink,NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit{
  boo!:boolean;  
  constructor(private connexion :ConnexionService){}
  
  ngOnInit(){
    
    this.connexion.estConnecter().subscribe((res:any)=>{
      this.boo=res;
      
      console.log("connecter")
    })

  }
  araliya():any{
    return this.connexion.isConnected.getValue();
  }
  change(){
    this.connexion.isConnected.next(false);
  }

}


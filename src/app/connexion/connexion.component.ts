import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ConnexionService } from './connexion.service';
import { RouterLink } from '@angular/router';

import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule,NgIf,RouterLink],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit{
  email: string = '';
  password: string = '';
  isFirst:boolean=true;
  isConnected!:boolean;
   
  constructor (private connexion:ConnexionService, private router:Router){
    this.isConnected =this.connexion.isConnected.getValue();
  }
  
  ngOnInit(): void {
      this.connexion.estConnecter().subscribe((res:any)=>{
        this.isConnected=res.value;
      })
  }
  private resetFields() {
    this.email = '';
    this.password = '';
  }
  onSubmit(){
    this.isFirst=false;
    this.isConnected=this.connexion.giveAcces(this.email,this.password)

    if(this.isConnected && ! this.connexion.redirect){setTimeout(() => {
      
      this.router.navigate(['/listProduct']); 
       }, 1000);
    }
    if(this.isConnected && this.connexion.redirect){setTimeout(() => {
      
      this.router.navigate(['/mesCommande']); 
       }, 1000);
    }

    this.resetFields();
  }
  
}

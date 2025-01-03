import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnexionService } from '../connexion/connexion.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthserviceService } from '../autho.service';
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };
  isFirst=true;
  isSubscribed=false;
  constructor(private connexion:ConnexionService ,private router:Router,private autho:AuthserviceService){}
  onSubmit() {
    // this.isFirst=false;
    // if(this.connexion.addUser(this.user.email,this.user.password)){
    //   this.isSubscribed=false;
    //   setTimeout(() => {
    //     this.connexion.isConnected.next(true);
    //     this.router.navigate(['/listProduct']); 
      
    //      }, 1000); 
    // }
    // else{this.isSubscribed=true;
    //   console.log('user exist');
    // }
    // this.resetFields();
    this.autho.register(this.user.email,this.user.name,this.user.password).subscribe(()=>this.connexion.isConnected.next(true))
    
  }
  private resetFields() {
    this.user.email = '';
    this.user.password = '';
  }
  
}

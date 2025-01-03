import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ConnexionService } from './connexion/connexion.service';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutoGuardService implements CanActivate{
  constructor(private connexion :ConnexionService,private router:Router){}
  canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|boolean|Promise<boolean>{
    if(this.connexion.isConnected.getValue()){

      return true;
    }
    else {
      this.connexion.redirect=true;
      return this.router.navigate(['/connexion']);}

  }
}

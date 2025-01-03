import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private textRechercherSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private categorySelected : BehaviorSubject<string>= new BehaviorSubject<string>('');
  modifierText(txt: string): void {
    this.textRechercherSubject.next(txt); 
  }

  envoyerText(): Observable<string> {
    return this.textRechercherSubject.asObservable(); 
  }
  recevoirCategorie(cat:string):void{
    this.categorySelected.next(cat); 
    this.envoyerCategorie();
  }
  envoyerCategorie():Observable<string>{
    
    return this.categorySelected.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  curentUser!:string;
  redirect:boolean=false;
  isConnected: BehaviorSubject<boolean>;
  private users: Map<string, string> = new Map();

  constructor() {
    const initialConnectedState = this.getLocalStorageItem('isConnected') === 'true';
  
    this.isConnected = new BehaviorSubject<boolean>(initialConnectedState);

    this.isConnected.subscribe(value => {
      this.setLocalStorageItem('isConnected', value.toString());
    }); 


    const savedUsers = this.getLocalStorageItem('users');
    if (savedUsers) {
      this.users = new Map(JSON.parse(savedUsers));
    }
  }

  isSubscribe(mail: string): boolean {
    return this.users.has(mail);
  }

  addUser(mail: string, password: string): boolean {
    if (!this.isSubscribe(mail)) {
      this.users.set(mail, password);
      console.log(mail);
      this.setLocalStorageItem('users', JSON.stringify(Array.from(this.users.entries())));
      this.curentUser=mail;
      return true;
    } else {
      return false;
    }
  }

  giveAcces(email: string, password: string): boolean {
    if (this.isSubscribe(email) && this.users.get(email) === password) {
      console.log('Connexion réussie!');
      this.isConnected.next(true);  
      this.curentUser=email;
      return true;
    } else {
      console.log('Identifiants incorrects. Veuillez réessayer.');
      return false;
    }
  }

  estConnecter(): Observable<boolean> {
    return this.isConnected.asObservable();
  }
  private getLocalStorageItem(key: string): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem(key);
    }
    return null;
  }

  private setLocalStorageItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(key, value);
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = '__test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }
}

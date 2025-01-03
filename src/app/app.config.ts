import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getAuth, provideAuth} from "@angular/fire/auth";
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
const firebaseConfig = {

  apiKey: "AIzaSyDOUqZMHNweVaioz_OaI5mgsuptOAiScHk",

  authDomain: "shop-335c8.firebaseapp.com",

  projectId: "shop-335c8",

  storageBucket: "shop-335c8.appspot.com",

  messagingSenderId: "61680056534",

  appId: "1:61680056534:web:c5f081bf82b4e085273177"

};

export const appConfig: ApplicationConfig = {

  
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),provideHttpClient(),provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(()=>getAuth()),]
};

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyDAkw9hDtvHS1XtBMF15Kae4VZFyPpr2xw",
        authDomain: "clinicaonline2-iannello.firebaseapp.com",
        projectId: "clinicaonline2-iannello",
        storageBucket: "clinicaonline2-iannello.appspot.com",
        messagingSenderId: "1056722608921",
        appId: "1:1056722608921:web:07502cf0394f3bb4501b88"
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideFunctions(() => getFunctions()),
    provideAnimations(),
  ],

};

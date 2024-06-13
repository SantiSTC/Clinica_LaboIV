import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'clinicaonline-iannello',
        appId: '1:229039981284:web:bbe421b7310900ea12a2f1',
        storageBucket: 'gs://clinicaonline-iannello.appspot.com',
        apiKey: 'AIzaSyBECwwDBDh6pAoWhMS4TI4-g2XJWdbhUBY',
        authDomain: 'clinicaonline-iannello.firebaseapp.com',
        messagingSenderId: '229039981284',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'; // ✅ FIX: Correct import
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient() // ✅ FIX: Correctly registered HttpClient
  ]
};

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { httpInterceptorProviders } from './http-interceptors';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: RequestCache, useClass: RequestCacheWithMap },
    HttpErrorHandler,
    MessageService,
    httpInterceptorProviders,
    AuthService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

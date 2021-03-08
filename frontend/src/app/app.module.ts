import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { JwtModule } from '@auth0/angular-jwt';
import { CommonModule, registerLocaleData } from '@angular/common';

import { AdministrationModule } from './administration/administration.module';
import { WebsiteModule } from './website/website.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BASE_BACKEND_PATH } from './common/const/base-backend-path.const';

import { LOCALE_ID } from '@angular/core';

import localePt from '@angular/common/locales/pt';
import { InjectorService } from './services/injector.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EffectsModule } from './effects/effects.module';

registerLocaleData(localePt, 'pt-BR');

export function getToken() {
  return Promise.resolve(localStorage.getItem('access_token'));
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule,
    SharedComponentsModule,
    AdministrationModule,
    WebsiteModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        allowedDomains: ['http://127.0.0.1:3000'], //localhost:3000
        authScheme: 'Bearer '
      },
    })
  ],
  providers: [
    JwtModule,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(injector: Injector) {
    InjectorService.injector = injector;
  }
}

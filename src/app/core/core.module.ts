import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { httpInterceptorProviders } from '../shared/interceptors/interceptors';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ]
})
export class CoreModule { }

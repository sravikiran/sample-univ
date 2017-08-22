import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';

import { DetailsModule } from './details/details.module';
import { routesModule } from './app.routes';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

import { WalmartProductsService } from './walmart-products.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }), JsonpModule, DetailsModule, routesModule
  ],
  providers: [WalmartProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

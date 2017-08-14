import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DetailsModule } from './details/details.module';
import { routesModule } from './app.routes';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }), DetailsModule, routesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

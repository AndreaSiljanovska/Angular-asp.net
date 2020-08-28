import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PropertyCardsComponent } from './property-cards/property-cards.component';
import { PropertyListComponent } from './property-list/property-list.component';
@NgModule({
  declarations: [				
    AppComponent,
      NavigationBarComponent,
      PropertyCardsComponent,
      PropertyListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
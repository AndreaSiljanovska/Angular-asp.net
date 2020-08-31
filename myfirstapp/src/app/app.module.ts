import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PropertyCardsComponent } from './property-cards/property-cards.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { HousingService } from './services/housing.service';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const appRoutes: Routes = [
  {
    path:'rent-property',
    component: PropertyListComponent
  },
  {
    path: 'property-details/:id',
    component: PropertyDetailsComponent
  },
  {
    path:'',
    component: PropertyListComponent
  },
  
  {
    path: 'add-property', 
    component: AddPropertyComponent
  }
]

@NgModule({
  declarations: [						
    AppComponent,
      NavigationBarComponent,
      PropertyCardsComponent,
      PropertyListComponent,
      AddPropertyComponent,
      PropertyDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

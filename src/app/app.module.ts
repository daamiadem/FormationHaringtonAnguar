import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienListComponent } from './components/client/clien-list/clien-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateClientComponent } from './components/client/create-client/create-client.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup'; 
import { CommonModule } from '@angular/common';
import { UpdateClientComponent } from './components/client/update-client/update-client.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { CommandeListComponent } from './components/commande/commande-list/commande-list.component';
import { CreateCommandeComponent } from './components/commande/create-commande/create-commande.component';
import { UpdateCommandeComponent } from './components/commande/update-commande/update-commande.component';
import { ProduitListComponent } from './components/produit/produit-list/produit-list.component';
import { ProduitCReateComponent } from './components/produit/produit-create/produit-create.component';
import { ProduitUpdateComponent } from './components/produit/produit-update/produit-update.component';



@NgModule({
  declarations: [
    AppComponent,
    ClienListComponent,
    MainPageComponent,
    NavbarComponent,
    CreateClientComponent,
    UpdateClientComponent,
    CommandeListComponent,
    CreateCommandeComponent,
    UpdateCommandeComponent,
    ProduitListComponent,
    ProduitCReateComponent,
    ProduitUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    ReactiveFormsModule, 
    NgToastModule, 
    FilterPipeModule, 
    FormsModule,

    
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

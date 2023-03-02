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



@NgModule({
  declarations: [
    AppComponent,
    ClienListComponent,
    MainPageComponent,
    NavbarComponent,
    CreateClientComponent,
    UpdateClientComponent,
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

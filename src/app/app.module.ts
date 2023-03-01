import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienListComponent } from './components/client/clien-list/clien-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClienCreateComponent } from './components/client/clien-create/clien-create.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeleteClientComponent } from './components/client/delete-client/delete-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienListComponent,
    MainPageComponent,
    NavbarComponent,
    ClienCreateComponent,
    DeleteClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienListComponent } from './components/client/clien-list/clien-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CreateClientComponent } from './components/client/create-client/create-client.component';
import { UpdateClientComponent } from './components/client/update-client/update-client.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
    {path: 'clientList', component: ClienListComponent },
    {path: 'NewClient', component: CreateClientComponent  } , 
    {path: 'updateClient/:idclient', component: UpdateClientComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

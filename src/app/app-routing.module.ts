import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienListComponent } from './components/client/clien-list/clien-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CreateClientComponent } from './components/client/create-client/create-client.component';
import { UpdateClientComponent } from './components/client/update-client/update-client.component';
import { CommandeListComponent } from './components/commande/commande-list/commande-list.component';
import { CreateCommandeComponent } from './components/commande/create-commande/create-commande.component';
import { UpdateCommandeComponent } from './components/commande/update-commande/update-commande.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
    {path: 'clientList', component: ClienListComponent },
    {path: 'NewClient', component: CreateClientComponent  } , 
    {path: 'updateClient/:idclient', component: UpdateClientComponent },
    {path: 'CreateCommande/:idclient', component: CreateCommandeComponent },
    {path: 'UpdateCommande/:idCommande', component: UpdateCommandeComponent },


    {path: 'commandeList', component: CommandeListComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

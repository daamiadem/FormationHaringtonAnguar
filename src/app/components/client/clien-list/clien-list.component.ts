import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/models/client';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-clien-list',
  templateUrl: './clien-list.component.html',
  styleUrls: ['./clien-list.component.css']
})
export class ClienListComponent implements OnInit {

  Clients : client[]; 

  constructor(private clientService : ClientServiceService) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe((client) =>{ (this.Clients = client), console.log(this.Clients)});
  }

  showDeleteConfirmationModal() {
  //  $('#app-delete-client').modal('show');
  }

  deleteClient(i: number, j: number) {
    //this.providers.splice(j, 1);
    //this.PS.RemoveProvider(i).subscribe();
  }
  showEditForm(client : client){

  }

}

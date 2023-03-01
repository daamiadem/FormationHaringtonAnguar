import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/models/client';
import { ClientServiceService } from 'src/app/services/client-service.service';
declare var $: any;
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clien-list',
  templateUrl: './clien-list.component.html',
  styleUrls: ['./clien-list.component.css']
})

export class ClienListComponent implements OnInit {

  Clients : client[]; 

  

  constructor(private clientService : ClientServiceService  , private toast: NgToastService , private router: Router  ) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe((client) =>{ (this.Clients = client), console.log(this.Clients)});
  
   
  }

  showDeleteConfirmationModal() {
    $('#app-delete-client').openmodal('show');
  }

  deleteClient(i: client, j: number) {

    this.Clients.splice(j, 1);
    this.clientService.RemoveClient(i).subscribe();
Swal.fire('Hi', 'Voulez vous vraiment client!', 'question').then((result) => {
      if (result.value) {
        this.Clients.splice(j, 1);
    this.clientService.RemoveClient(i.idClient).subscribe();      }
    });
  }
  showEditForm(client : client){
    this.router.navigate(['updateClient', client.idClient]);

  }

}

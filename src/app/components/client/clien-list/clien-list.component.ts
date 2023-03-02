import { Component, OnInit } from '@angular/core';
import { client } from 'src/app/models/client';
import { ClientServiceService } from 'src/app/services/client-service.service';
declare var $: any;
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-clien-list',
  templateUrl: './clien-list.component.html',
  styleUrls: ['./clien-list.component.css']
})

export class ClienListComponent implements OnInit {

  Clients : client[]; 
  name : string ; 
  nameRecherche : FormGroup; 
  ProfessioRecherche : FormGroup;
  

  

  constructor(private clientService : ClientServiceService  ,private formBuilder: FormBuilder,  private toast: NgToastService , private router: Router  ) { }

  ngOnInit(): void {
    this.clientService.getAllClients().subscribe((client) =>{ (this.Clients = client), console.log(this.Clients)});
    this.nameRecherche= this.formBuilder.group({
      nameClient : [''], 
    })
    this.ProfessioRecherche= this.formBuilder.group({
      ProfessionClient: ['']
    })
   
  }

  onSubmitName(){
    this.name = this.nameRecherche.getRawValue().nameClient;
    console.log(this.name)
    this.clientService.RechercheByName(this.name).subscribe(client=>{ (this.Clients = client), console.log(this.Clients)}); 
  }


  onSubmitProfession(){
    this.name = this.ProfessioRecherche.getRawValue().ProfessionClient;
    console.log(this.name)
    this.clientService.RechercheByProfession(this.name).subscribe(client=>{ (this.Clients = client), console.log(this.Clients)}); 
  

  }



  showDeleteConfirmationModal() {
    $('#app-delete-client').openmodal('show');
  }

  deleteClient(i: client, j: number) {

    this.Clients.splice(j, 1);
    this.clientService.RemoveClient(i).subscribe();
Swal.fire('Hi', 'Voulez vous vraiment client!', 'question').then((result) => {
      if (result.value) {
    this.clientService.RemoveClient(i.idClient).subscribe();      }
    });
  }
  showEditForm(client : client){
    this.router.navigate(['updateClient', client.idClient]);

  }


}

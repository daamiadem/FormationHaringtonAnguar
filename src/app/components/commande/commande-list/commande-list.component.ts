import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { client } from 'src/app/models/client';
import { commande } from 'src/app/models/commande';
import { CommandeServiceService } from 'src/app/services/commande-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {

  Commandes : commande[] ; 
  client : client ; 
  cl : client ; 
  RechercheDate : FormGroup;


  constructor(private commandeService : CommandeServiceService  ,private formBuilder: FormBuilder , private router: Router ) { 
    this.commandeService.getAllCommande().subscribe((commande) =>{ (this.Commandes = commande), console.log(this.Commandes)});

  }

  ngOnInit(): void {
    this.RechercheDate = this.formBuilder.group({
      DateDebut : [''], 
      DateFin : [''] , 
    })
  }

  deleteCommande(i : commande , j : number){
Swal.fire('Hi', 'Voulez vous vraiment client!', 'question').then((result) => {
      if (result.value) {
    this.commandeService.RemoveCommande(i.idCommande).subscribe(); 
    this.Commandes.splice(j, 1);
  }
    });

   
  
  }

  onSubmitDate(){

    const Commandefiltered= this.Commandes.filter(c => {
      const date = c.dateLivraison ; 
      return date >= this.RechercheDate.getRawValue().DateDebut && date<= this.RechercheDate.getRawValue().DateFin;


    })
  
    this.Commandes = Commandefiltered ; 

  }


  getClientInfo(c : commande){
    console.log(c.idCommande);
    this.commandeService.GetClientCommande(c.idCommande).subscribe(commande => {
      
      this.cl = commande;
      Swal.fire('Client de commande', 
      `<b>Nom de client : </b> ${this.cl.nameClient} <br>
      <b>Profession de client : </b> ${this.cl.profession}<br>
      <b> phone : </b> ${this.cl.phoneNumber}<br>
      <b>date de naissance : </b> ${this.cl.birthDate} <br>

      `, 'info')

      })
      
    
  }
  showEditForm(commande : commande){
    this.router.navigate(['UpdateCommande', commande.idCommande]);

  }
 


}

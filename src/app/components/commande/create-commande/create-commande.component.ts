import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CommandeServiceService } from 'src/app/services/commande-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {
  commandeForm: FormGroup;
  idClient :number ; 

  constructor(private formBuilder: FormBuilder, private commandeService : CommandeServiceService , private toast: NgToastService, private router: Router ,     private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.idClient = +this.route.snapshot.paramMap.get('idclient');

    this.commandeForm = this.formBuilder.group({
      description: ['', Validators.required],
      dateLivraison: ['', Validators.required],
      nomBoutique: ['', Validators.required],
      poids: ['', Validators.required]
    });
  
  }
  onSubmit(){
    if (this.commandeForm.valid) {
      const newCommande: any = {
        description: this.commandeForm.get('description').value,
        dateLivraison: this.commandeForm.get('dateLivraison').value,
        nomBoutique: this.commandeForm.get('nomBoutique').value,
        poids: this.commandeForm.get('poids').value
      };
      // Ajouter le nouveau client dans la base de données ou faire autre chose avec l'objet newClient
      console.log(newCommande);


this.commandeService.ajouterCommande(newCommande , this.idClient).subscribe(); 
      // Réinitialiser le formulaire
      this.commandeForm.reset();
    } else {
      // Afficher les messages d'erreur pour les champs invalides
      Object.keys(this.commandeForm.controls).forEach(key => {
        this.commandeForm.get(key).markAsDirty();
        this.commandeForm.get(key).markAsTouched();
      });
    }
    Swal.fire('Hi', 'commande ajouté avec succés!', 'success').then((result) => {
      if (result.value) {
        this.goToMainPage();      }
    });
  
  }

  goToMainPage(){
    this.router.navigate(['/commandeList']);
  }
}

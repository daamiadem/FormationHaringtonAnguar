import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { client } from '../../../models/client';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  clientForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private clientService : ClientServiceService , private toast: NgToastService, private router: Router) { }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      nameClient: ['', Validators.required],
      profession: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      birthDate: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.clientForm.valid) {
      const newClient: any = {
        nameClient: this.clientForm.get('nameClient').value,
        profession: this.clientForm.get('profession').value,
        phoneNumber: this.clientForm.get('phoneNumber').value,
        birthDate: this.clientForm.get('birthDate').value
      };
      // Ajouter le nouveau client dans la base de données ou faire autre chose avec l'objet newClient
      console.log(newClient);


this.clientService.ajouterClient(newClient).subscribe(); 
      // Réinitialiser le formulaire
      this.clientForm.reset();
    } else {
      // Afficher les messages d'erreur pour les champs invalides
      Object.keys(this.clientForm.controls).forEach(key => {
        this.clientForm.get(key).markAsDirty();
        this.clientForm.get(key).markAsTouched();
      });
    }
    Swal.fire('Hi', 'client ajouté avec succés!', 'success').then((result) => {
      if (result.value) {
        this.goToMainPage();      }
    });
  }
  goToMainPage(){
    this.router.navigate(['/clientList']);
  }
  }



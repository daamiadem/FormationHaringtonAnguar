import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { commande } from 'src/app/models/commande';
import { CommandeServiceService } from 'src/app/services/commande-service.service';

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styleUrls: ['./update-commande.component.css']
})
export class UpdateCommandeComponent implements OnInit {
  CommandeForm: FormGroup;
  id : number ; 
  commande : commande; 
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private CommandeService: CommandeServiceService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('idCommande');

    this.CommandeService.getCommandeBytId(this.id).subscribe(commande => {
      this.commande = commande;
      console.log(commande);
      this.CommandeForm = this.formBuilder.group({
        nomBoutique: [commande.nomBoutique, Validators.required],
        description: [commande.description, Validators.required],
        dateLivraison: [commande.dateLivraison, Validators.required],
        poids: [commande.poids, Validators.required],

        Validators: [commande.poids, Validators.required]
      });

    });

  }


  onSubmit() {
    console.log(this.CommandeForm.getRawValue());

    this.CommandeService.updateClient(this.CommandeForm.getRawValue(), this.id ).subscribe(() => {
      this.router.navigate(['commandeList']);
    });
  }

}

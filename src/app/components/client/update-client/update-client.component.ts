import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from 'src/app/models/client';
import { ClientServiceService } from 'src/app/services/client-service.service';
@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  client: client;
  clientForm: FormGroup;
  id : number ; 
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientServiceService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('idclient');
    this.clientService.getClientById(this.id).subscribe(client => {
      this.client = client;
      console.log(client);
      this.clientForm = this.formBuilder.group({
        nameClient: [client.nameClient, Validators.required],
        profession: [client.profession, Validators.required],
        phoneNumber: [client.phoneNumber, Validators.required],
        birthDate: [client.birthDate, Validators.required]
      });

    });
  }

  

  onSubmit() {
    console.log(this.clientForm.getRawValue());

    this.clientService.updateClient(this.clientForm.getRawValue(), this.id ).subscribe(() => {
      this.router.navigate(['clientList']);
    });
  }

}

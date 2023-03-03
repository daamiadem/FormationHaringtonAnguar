import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {


  private url ='http://localhost:8092/api/'


  constructor( private http : HttpClient) { }



  public  getAllProduits(): Observable<produit[]> {
    return this.http.get<produit[]>(this.url + "/GetAllProduits");
  }


  public  RemoveCommande(produit: produit | number): Observable<produit> {
    const id = typeof produit === 'number' ? produit : produit.idProduit;
    const url = this.url + '/DeleteProduit/' + id;
    return this.http.delete<produit>(url);
  }



}

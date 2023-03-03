import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from '../models/client';
import { commande } from '../models/commande';


@Injectable({
  providedIn: 'root'
})
export class CommandeServiceService {

  
  private url ='http://localhost:8092/api/'


  constructor(private http : HttpClient) { }

  
  public  getAllCommande(): Observable<commande[]> {
    return this.http.get<commande[]>(this.url + "/GetAllCommande");
  }

  public getCommandeBytId(id : number) : Observable<commande> {
    return this.http.get<commande>(this.url+ "GetCommandeByID/" +id); 
  }

  public  RemoveCommande(commande: commande | number): Observable<commande> {
    const id = typeof commande === 'number' ? commande : commande.idCommande;
    const url = this.url + '/DeleteCommande/' + id;
    return this.http.delete<commande>(url);
  }

  public GetClientCommande (id : number): Observable<client> {
    return this.http.get<client>(this.url+ 'GetClientCommande/' + id)
  }

  public ajouterCommande(commande: commande , id : number) : Observable<commande>{

    return this.http.post<commande>(this.url + "/CreateCommande/" + id ,commande , this.httpOptions);
  }

  public updateClient (commande : commande , id : number) : Observable<commande>{
    return this.http.put<commande> (this.url + "/UpdateCommande/" + id  , commande , this.httpOptions )
  }

  httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
    }


}

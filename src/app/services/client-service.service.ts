import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from '../models/client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private url ='http://localhost:8092/api/'

  constructor(private http : HttpClient) { }


  public  getAllClients(): Observable<client[]> {
    return this.http.get<client[]>(this.url + "/GetAllClients");
  }

  public getClientById(id : number) : Observable<client> {
    return  this.http.get<client>(this.url + "/GetClientsByid/" + id )
  }


  public updateClient (client : client , id : number) : Observable<client>{
    return this.http.put<client> (this.url + "/UpdateClient/" + id  , client , this.httpOptions )
  }

  public  RemoveClient(client: client | number): Observable<client> {
    const id = typeof client === 'number' ? client : client.idClient;
    const url = this.url + '/DeleteClient/' + id;
    return this.http.delete<client>(url);
  }
  httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
    }



  public ajouterClient(client: client) : Observable<client>{

    return this.http.post<client>(this.url + "/CreateClient",client , this.httpOptions);
  }


}

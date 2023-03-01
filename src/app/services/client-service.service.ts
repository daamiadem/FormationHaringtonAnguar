import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from '../models/client';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private url ='http://localhost:8092/api/'

  constructor(private http : HttpClient) { }


  public  getAllClients(): Observable<client[]> {
    return this.http.get<client[]>(this.url + "/GetAllClients");
  }

  RemoveClient(client: client | number): Observable<client> {
    const id = typeof client === 'number' ? client : client.idClient;
    const url = this.url + '/DeleteClient/' + id;
    return this.http.delete<client>(url);
  }


}

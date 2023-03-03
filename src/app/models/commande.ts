import { client } from '../models/client';


export class commande {
    idCommande: number; 
    description: string ;  
    dateLivraison:string ; 
    nomBoutique: string ; 
    poids: number ; 
    client : client ; 


}
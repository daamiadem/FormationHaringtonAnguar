import { commande } from '../models/commande';

export class client {
    idClient: number; 
    nameClient: string ;  
    profession:string ; 
    phoneNumber: string ; 
    birthDate: string ; 
    commande : commande[] ; 
}
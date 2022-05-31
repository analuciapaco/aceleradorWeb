import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteService extends DatabaseService<Cliente> {
  constructor() {
    super('cliente');
  }

}

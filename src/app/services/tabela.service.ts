import { Injectable } from '@angular/core';
import { Tabela } from '../models/tabela.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class TabelaService extends DatabaseService<Tabela> {

  constructor() { 
    super('tabela')
  }
}

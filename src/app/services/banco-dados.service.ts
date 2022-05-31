import { Injectable } from '@angular/core';
import { BancoDados } from '../models/banco-dados.model';
import { Cliente } from '../models/cliente.model';
import { BaseModule } from '../shared/base/base.module';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class BancoDadosService extends DatabaseService<BancoDados> {

  constructor() {
    super('banco_dados');

   }
   async getByCliente(cliente: Cliente){
 const data = await this.supabase.from<BancoDados>(this.table).select('*').eq('cliente',cliente).order('nome')
  return data.data
}
}

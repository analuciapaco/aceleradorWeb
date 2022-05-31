import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Configuracao } from '../models/configuracao.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracaoService extends DatabaseService<Configuracao> {
  constructor() {
    super('configuracao');
  }
  async getConfiguracoes(cliente: Cliente) {
    const data = await this.supabase
      .from<Configuracao>(this.table)
      .select(`*, cliente(*)`)
      .eq('cliente', cliente)
      .order('dataConfiguracao',{ascending:false});
      //ascending obter as mais recentes
  }
}

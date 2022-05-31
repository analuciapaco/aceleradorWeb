import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends DatabaseService<Usuario> {
  constructor() {
    super('usuarios');
  }

  async signUp(email: string, password: string) {
    let { user, error } = await this.supabase.auth.signUp({ email, password });

    return { user, error };
  }

  async signIn(email: string, password: string) {
    let { user, error } = await this.supabase.auth.signIn({ email, password });

    return { user, error };
  }
  signOut() {
    return this.supabase.auth.signOut();
  }

 }

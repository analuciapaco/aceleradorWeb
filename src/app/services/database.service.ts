import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Base } from '../models/base.model';
import { CrudI } from './crud.interface';

export class DatabaseService<T extends Base> implements CrudI<T> {
  table?: string;

  SUPABASE_URL = 'https://miglecqsljkylacgtglr.supabase.co';
  SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pZ2xlY3FzbGpreWxhY2d0Z2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk3NzMyNDEsImV4cCI6MTk2NTM0OTI0MX0.kRaIcC6aODIyrp_9pGM7koGXT8-EQ9CO8wkkIlz-nbo';
  supabase: SupabaseClient;

  constructor( table: string) {
    this.supabase = createClient(this.SUPABASE_URL, this.SUPABASE_KEY);
    this.table = table
  }

  async get(t: T) {
    if (this.table != undefined) {
      const data = await this.supabase
        .from<T>(this.table)
        .select('*')
        .match({ id: t.id })
        .single();
      return data;
    }
    return;
  }

  async getAll(limit?: number) {
    if (this.table != undefined) {
      const query = this.supabase.from<T>(this.table).select('*');
      if (limit) {
        query.limit(limit);
        const data = await query;
        return data.data;
      }else{
      const data = await query;
      return data.data;
      }
    }
    return;
  }

  async add(t: T) {
    if (this.table != undefined) {
      const { data, error } = await this.supabase.from<T>(this.table).insert(t);
      return { data, error };
    }
    return;
  }

  async update(t: T) {
    if (this.table != undefined) {
      const { data, error } = await this.supabase
        .from<T>(this.table)
        .update(t)
        .match({ id: t.id });
      return { data, error };
    }
    return;
  }

  async delete(t: T) {
    if (this.table != undefined) {
      const { data, error } = await this.supabase
        .from<T>(this.table)
        .delete()
        .match({ id: t.id });
      return { data, error };
    }
    return;
  }
}

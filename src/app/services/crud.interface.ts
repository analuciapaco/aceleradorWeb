import { PostgrestError, PostgrestResponse, PostgrestSingleResponse } from "@supabase/supabase-js";

export interface CrudI<T> {
  get(t: T):Promise<PostgrestSingleResponse<T> | undefined>
  getAll(limit?: number):Promise<T[]>
  add(t: T):Promise<{ data: T[] | null; error: PostgrestError | null; } | undefined>
  update(t: T):Promise<{ data: T[] | null; error: PostgrestError | null; } | undefined>
  delete(t: T):Promise<{ data: T[] | null; error: PostgrestError | null; } | undefined>
}
//criação de um contrato genérico

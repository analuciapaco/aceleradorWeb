import { Base } from "./base.model";
import { Cliente } from "./cliente.model";

export class BancoDados extends Base{
    nome: string
    username: string
    password: string
    schema: string
    url: string
    cliente: Cliente
}
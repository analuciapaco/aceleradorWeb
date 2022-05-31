import { BancoDados } from "./banco-dados.model";
import { Base } from "./base.model";
import { Cliente } from "./cliente.model";
import { Seguranca } from "./seguranca.model";

export class Configuracao extends Base {
    seguranca: Seguranca
    bancoDados: BancoDados
    cliente: Cliente
    modelo: string
    grupo: string
    artefato: string
    nome: string
    descricao: string
    sigla: string
    dataConfiguracao: Date
}
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BancoDados } from 'src/app/models/banco-dados.model';
import { Tabela } from 'src/app/models/tabela.model';
import { BancoDadosService } from 'src/app/services/banco-dados.service';
import { TabelaService } from 'src/app/services/tabela.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
  providers: [MessageService],
})
export class TabelaComponent implements OnInit {
  edit: boolean;
  view: string = 'tabela';
  form = new FormGroup({});
  model: Tabela;
  tabelas: Tabela[];
  bancoDadosList: BancoDados[];
  fields: FormlyFieldConfig[];

  constructor(
    private messageService: MessageService,
    private tabelaService: TabelaService,
    private bancoDadosService: BancoDadosService,
    private primeNGConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.chargeDadosList();
  }

  async chargeDadosList() {
    await this.bancoDadosService.getAll().then((retorno) => {
      if (retorno) {
        this.bancoDadosList = retorno;
        this.tabelaService
          .getAll(10)
          .then((dados) => (this.tabelas = dados));

        this.buildForm();
        this.view = 'table';
      }
    });
  }

  cancel() {
    this.view = 'table';
  }
  buildForm() {
    this.fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-2', // campos na mesma linha
            key: 'nome',
            type: 'input',
            templateOptions: {
              label: 'Nome',
              type: 'text',
              placeholder: 'Informe um nome',
              required: true,
            },
          },
          {
            className: 'col-4', // campos na mesma linha
            key: 'tipo',
            type: 'input',
            templateOptions: {
              label: 'Tipo',
              type: 'text',
            },
          },
          {
            className: 'col-6', // campos na mesma linha
            key: 'banco_dados_id',
            type: 'select',
            templateOptions: {
              label: 'Banco de Dados',
              type: 'text',
              placeholder: 'Informe um banco de dados',
              required: true,
              options: this.bancoDadosList.map((bancoDados) => ({
                label: bancoDados.schema,
                value: bancoDados.id,
              })),
            },
          },
        ],
      },
    ];
  }

  add() {
    this.form.reset();
    this.model = new Tabela();
    this.edit = false;
    this.view = 'form';
  }

  save() {
    if (this.form.valid) {
      if (this.model.id) {
        this.update();
        return;
      }
      this.tabelaService.add(this.model).then((dados) => {
        if (!dados.error) {
          this.tabelas.push(dados.data[0]);
          this.view = 'table';
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Tabela salvo com sucesso',
          });
        } else {
          this.messageService.add({
            severity: 'warn',
            summary: 'Delete',
            detail: 'Erro ao salvar tabela',
          });
        }
      });
    }
  }

  update() {
    this.tabelaService.add(this.model).then(() => {
      const index = this.tabelas.findIndex((c) => c.id == this.model.id);
      this.tabelas[index] = this.model;
      this.view = 'table';
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Tabela atualizada com sucesso',
      });
    });
  }

  select(Tabela: Tabela) {
    this.edit = true;
    this.view = 'form';
    this.model = Tabela;
  }

  remove(Tabela: Tabela) {
    this.tabelaService.delete(Tabela).then(() => {
      this.tabelas = this.arrayRemove(this.tabelas, Tabela.id);
      this.messageService.add({
        severity: 'warn',
        summary: 'Delete',
        detail: 'Tabela excluida com sucesso',
      });
    });
  }

  arrayRemove(arr: Tabela[], id: string) {
    return arr.filter((c) => c.id != id);
  }
}

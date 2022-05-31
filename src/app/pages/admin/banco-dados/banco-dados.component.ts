import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BancoDados } from 'src/app/models/banco-dados.model';
import { BancoDadosService } from 'src/app/services/banco-dados.service';

@Component({
  selector: 'app-banco-dados',
  templateUrl: './banco-dados.component.html',
  styleUrls: ['./banco-dados.component.scss'],
  providers: [MessageService],
})
export class BancoDadosComponent implements OnInit {
  edit: boolean;
  view: string = 'tabela';
  form = new FormGroup({});
  model: BancoDados;
  bancoDadosList: BancoDados[];
  fields: FormlyFieldConfig[];
  constructor(
    private  messageService: MessageService,
    private bancoDadosService: BancoDadosService
  ) {}

  ngOnInit(): void {
    this.bancoDadosService
      .getAll(10)
      .then((dados) => (this.bancoDadosList = dados));
    this.buildForm();
    this.view = 'table';
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
            className: 'col-2',//3 campos na mesma linha
            key: 'password',
            type: 'input',
            templateOptions: {
              label: 'Password',
              type: 'text',
              placeholder: 'Informe a password',
            },
          },
          {
            className: 'col-3',//3 campos na mesma linha
            key: 'username',
            type: 'input',
            templateOptions: {
              label: 'Username',
              type: 'text',
              placeholder: 'Informe o username',
            },
          },
          {
            className: 'col-4',//3 campos na mesma linha
            key: 'schema',
            type: 'input',
            templateOptions: {
              label: 'Schema',
              type: 'text',
              placeholder: 'Informe o schema',
              required: true,
            },
          },
          {
            className: 'col-3',//3 campos na mesma linha
            key: 'url',
            type: 'input',
            templateOptions: {
              label: 'URL',
              type: 'text',
              placeholder: 'Informe a URL',
              required: true,
            },
          },
        ],
      },
    ];
  }
  add() {
    this.form.reset();
    this.model = new BancoDados();
    this.edit = false;
    this.view = 'form';
  }

  save() {
    if (this.form.valid) {
      if (this.model.id) {
        this.update();
        return;
      }
      this.bancoDadosService.add(this.model).then((dados) => {
        if (!dados.error) {
          this.bancoDadosList.push(dados.data[0]);
          this.view = 'table';
          this.message('OK', 'BancoDados salvo com sucesso', 'sccess');
        } else {
          this.message(
            'Erro',
            `Erro aoa salvar. Detalhes: ${dados.error.message}`,
            'danger'
          );
        }
      });
    }
  }

  update() {
    this.bancoDadosService.add(this.model).then(() => {
      const index = this.bancoDadosList.findIndex((c) => c.id == this.model.id);
      this.bancoDadosList[index] = this.model;
      this.view = 'table';
      this.message('OK', 'BancoDados atualizado com sucesso', 'sccess');
    });
  }

  select(bancoDados: BancoDados) {
    this.edit = true;
    this.view = 'form';
    this.model = bancoDados;
  }

  remove(bancoDados: BancoDados) {
    this.bancoDadosService.delete(bancoDados).then(() => {
      this.bancoDadosList = this.arrayRemove(
        this.bancoDadosList,
        bancoDados.id
      );
      this.message('Exclusao', 'BancoDados excluido com sucesso', 'danger');
    });
  }

  arrayRemove(arr: BancoDados[], id: string) {
    return arr.filter((c) => c.id != id);
  }

  private message(title: string, message: string, status: string) {
    this.messageService.add({
      severity: title,
      summary: status,
      detail: message,
      life: 30000,
    });
  }
}

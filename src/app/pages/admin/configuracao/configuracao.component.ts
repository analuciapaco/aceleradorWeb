import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BancoDados } from 'src/app/models/banco-dados.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Configuracao } from 'src/app/models/configuracao.model';
import { BancoDadosService } from 'src/app/services/banco-dados.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ConfiguracaoService } from 'src/app/services/configuracao.service';
import { MessageService } from 'primeng/api';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.scss'],
  providers: [MessageService],
})
export class ConfiguracaoComponent implements OnInit {
  edit: boolean;
  view: string = 'tabela';
  form = new FormGroup({});
  model: Configuracao;
  modelBancoDados: BancoDados;
  configuracoes: Configuracao[];
  clienteList: Cliente[];
  clienteSelecionado: Cliente;
  bancoDadosList: BancoDados[];
  fields: FormlyFieldConfig[];
  fieldsBancoDados: FormlyFieldConfig[];
  fieldsSeguranca: FormlyFieldConfig[];
  bancoDadosSelecionado: BancoDados;
  nomeBancoDados: string ='Banco de Dados'
  template: any[] = [
    { label: 'API', value: 'API' },
    { label: 'WEB', value: 'WEB' },
  ];
  versao: any[] = [
    { label: '1.0', value: '1' },
    { label: '2.0-BETA', value: '2' },
  ];

  constructor(
    private messageService: MessageService,
    private clienteService: ClienteService,
    private bancoDadosService: BancoDadosService,
    private configuracaoService: ConfiguracaoService
  ) {}
  async ngOnInit(): Promise<void> {
    this.clienteList = await this.clienteService.getAll();
    this.bancoDadosList = await this.bancoDadosService.getAll();
    this.buildForm();
    this.buildFormBancoDados()
    this.buildFormSeguranca()
  }
  buildFormBancoDados(){
    this.fieldsBancoDados= [
        {
        key: 'username',
        type: 'input',
        templateOptions: {
          label: 'Username',
          type: 'text',
          readonly: true
        },
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          label: 'Password',
          type: 'text',
        },
      },
      {
        key: 'schema',
        type: 'input',
        templateOptions: {
          label: 'Schema',
          type: 'text',
          required: true,
        },
      },
      {
        key: 'url',
        type: 'input',
        templateOptions: {
          label: 'URL',
          type: 'text',
          required: true,
        },
      },

    ];
  }
  
  buildFormSeguranca(){
    this.fieldsSeguranca= [
      
       {
        key: 'username',
        type: 'input',
        templateOptions: {
          label: 'Username',
          type: 'text',
          readonly: true
        },
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          label: 'Password',
          type: 'text',
          readonly: true
        },
      }

    ];
  }
  buildForm() {
    this.fields = [
      {
        key: 'cliente',
        type: 'select',
        templateOptions: {
          label: 'Cliente',
          type: 'text',
          required: true,
          placeholder: 'Selecionar o  cliente',
          options: this.clienteList.map((cliente) => ({
            label: cliente.nome,
            value: cliente.id,
          })),
        },
      },
      {
        key: 'template',
        type: 'select',
        templateOptions: {
          label: 'Template',
          type: 'text',
          required: true,
          placeholder: 'Selecionar template',
          options: this.template,
        },
      },
      {
        key: 'versao',
        type: 'select',
        templateOptions: {
          label: 'Versao',
          type: 'text',
          required: true,
          placeholder: 'Selecionar a  versao',
          options: this.versao,
        },
      },
      {
        template: '<br><h4>Metadados do Projeto</h4><hr>',
      },

      {
        key: 'grupo',
        type: 'input',
        templateOptions: {
          label: 'Group',
          type: 'text',
          required: true,
        },
      },
      {
        key: 'artefato',
        type: 'input',
        templateOptions: {
          label: 'Artifact',
          type: 'text',
        },
      },
      {
        key: 'nome',
        type: 'input',
        templateOptions: {
          label: 'Name',
          type: 'text',
          required: true,
        },
      },
      {
        key: 'descricao',
        type: 'input',
        templateOptions: {
          label: 'Description',
          type: 'text',
        },
      },
      {
        key: 'sigla',
        type: 'input',
        templateOptions: {
          label: 'Sigla',
          type: 'text',
        },
      },
    ];
  }

  async filterByBancoDados() {
    this.bancoDadosList = await this.bancoDadosService.getByCliente(
      this.clienteSelecionado
    );
  }

  add() {
    this.form.reset();
    this.model = new Configuracao();
    this.edit = false;
    this.view = 'form';
    this.model.cliente = this.clienteSelecionado
    this.view = 'form'
  }
  cancel(){
    this.view = 'table'
  }
  
  save() {
    if (this.form.valid) {
      if (this.model.id) {
        this.update();
        return;
      }
      this.configuracaoService.add(this.model).then((dados) => {
        this.cancel()
        if (!dados.error) {
          
          this.model.cliente = this.clienteSelecionado
          this.model.bancoDados = this.bancoDadosSelecionado
          this.configuracoes.push(...dados.data);
           this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Configuracao salva com sucesso',
          });
        } else {
          this.messageService.add({
            severity: 'warn',
            summary: 'Delete',
            detail: 'Erro ao salvar Configuracao',
          });
        }
      });
    }
  }

  update() {
    this.configuracaoService.add(this.model).then(() => {
      const index = this.configuracoes.findIndex((c) => c.id == this.model.id);
      this.configuracoes[index] = this.model;
      this.view = 'table';
      this.message('OK', 'Configuracao atualizada com sucesso', 'sccess');
    });
  }

  select(configuracao: Configuracao) {
    this.edit = true;
    this.view = 'form';
    this.model = configuracao;
  }
  selectBancoDados(bancoDados: BancoDados) {
    this.edit = true;
    this.view = 'form';
    this.modelBancoDados = bancoDados;
  }

  remove(configuracao: Configuracao) {
    this.model = configuracao
    this.configuracaoService.delete(configuracao).then(() => {
      this.configuracoes = this.arrayRemove(
        this.configuracoes,
        configuracao.id
      );
      this.message('Exclusao', 'Cliente excluido com sucesso', 'danger');
    });
  }

  arrayRemove(arr: Configuracao[], id: string) {
    return arr.filter((c) => c.id != id);
  }
  redirectConfiguracaoBd() {
   // this.closeForm = event;
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

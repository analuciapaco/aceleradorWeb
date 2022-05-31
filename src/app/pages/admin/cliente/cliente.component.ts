import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  providers: [MessageService],
})
export class ClienteComponent implements OnInit {
  edit: boolean;
  view: string = 'tabela';
  form = new FormGroup({});
  model: Cliente;
  clientes: Cliente[];
  fields: FormlyFieldConfig[];
  constructor(
    private clienteService: ClienteService,
    private messageService: MessageService
  ) {}

  async ngOnInit(): Promise<void> {
    this.clientes = await this.clienteService
      .getAll(10)
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
           className: 'col-4', // campos na mesma linha
            key: 'nome',
            type: 'input',
            templateOptions: {
              label: 'Nome',
              type: 'text',
              placeholder: 'Informe um nome ',
              rows: 2,
              required: true,
            },
          },
          {
            className: 'col-4', // campos na mesma linha
            key: 'versao',
            type: 'input',
            templateOptions: {
              label: 'versão',
              type: 'text',
            },
          },
        ],
      },
     ];
  }

  add() {
    this.form.reset();
    this.model = new Cliente();
    this.edit = false;
    this.view = 'form';
  }

  save() {
    if (this.form.valid) {
      if (this.model.id) {
        this.update();
        return;
      }
      this.clienteService.add(this.model).then((dados) => {
        if (!dados.error) {
          this.clientes.push(dados.data[0]);
          this.view = 'table';
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Cliente salvo com sucesso',
          });
        } else {
          this.messageService.add({
            severity: 'warn',
            summary: 'Delete',
            detail: 'Erro ao salvar Cliente',
          });
        }
      });
    }
  }

  update() {
    this.clienteService.add(this.model).then(() => {
      const index = this.clientes.findIndex((c) => c.id == this.model.id);
      this.clientes[index] = this.model;
      this.view = 'table';
      this.message('OK', 'Cliente atualizado com sucesso', 'sccess');
    });
  }

  select(cliente: Cliente) {
    this.edit = true;
    this.view = 'form';
    this.model = cliente;
  }

  remove(cliente: Cliente) {
    this.clienteService.delete(cliente).then(() => {
      this.clientes = this.arrayRemove(this.clientes, cliente.id);
      this.message('Exclusao', 'Cliente excluido com sucesso', 'danger');
    });
  }

  arrayRemove(arr: Cliente[], id: string) {
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

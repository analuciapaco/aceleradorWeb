import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Configuracao } from 'src/app/models/configuracao.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-elevation',
  templateUrl: './elevation.component.html',
  styleUrls: ['./elevation.component.scss'],
})
export class ElevationComponent {
  @Input() clientes: Cliente[];
  @Input() fields: FormlyFieldConfig[];
  form = new FormGroup({});
  
  
  constructor(private clienteService: ClienteService) {}
  model: Configuracao;
}

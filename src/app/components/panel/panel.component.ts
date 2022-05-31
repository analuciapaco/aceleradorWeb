import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MessageService } from 'primeng/api';
import { BancoDados } from 'src/app/models/banco-dados.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  providers: [MessageService]
})
export class PanelComponent  {

  @Input() bancoDados: BancoDados[];
  @Input() model: BancoDados;
  @Input() fields: FormlyFieldConfig[];
  @Input() titulo: string
  form = new FormGroup({});
  activeState: boolean[] = [true, false, false];
  
  
  constructor(private messageService: MessageService) {
   
  }

  onTabClose() {
      this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: '})
  }
  
  onTabOpen() {
      this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: '});
  }

  toggle(index: number) {
      this.activeState[index] = !this.activeState[index];
  }


 

}

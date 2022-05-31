import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbDialogModule, NbToastrModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { SplitterModule } from "primeng/splitter";
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbDialogModule.forChild(),
    NbCardModule,
    NbToastrModule.forRoot(),
    ReactiveFormsModule,
    SplitterModule,
    AccordionModule,
    PanelModule,
    FormlyModule.forRoot({
      validationMessages:[
        {name:'required', message: 'Campo Obrigatório'},
      ]
    }),
    FormlyPrimeNGModule
  ],
  exports: [
    CommonModule,
    NbDialogModule,
    NbCardModule,
    NbToastrModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyPrimeNGModule,
    TableModule,
    ButtonModule,
    CardModule,
    ToastModule, 
    AccordionModule,
    SplitterModule,
    ButtonModule,
    InputTextModule,
    PanelModule
   
  ]
})
export class BaseModule { }


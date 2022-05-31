import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/public/login/login.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ConfiguracaoBancoDadosComponent } from './pages/admin/configuracao-banco-dados/configuracao-banco-dados.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfiguracaoBancoDadosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ButtonModule,
    InputTextModule,
    FormsModule
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

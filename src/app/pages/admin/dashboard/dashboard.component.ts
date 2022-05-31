
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@supabase/supabase-js';
import { Subject } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuItem } from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  itens: MenuItem[];
  title: any;
  user!: User;
  private destroy$ = new Subject<void>();
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
    
  )
   {}
  ngOnDestroy(){
    this.destroy$.next()
    this.destroy$.complete()
  }

  ngOnInit(): void {
   this.criateMenu()
  
  }

  criateMenu() {
    this.itens = [
          {
            label:'Configuração',
            icon: 'fa fa-fw fa-bar-chart',
            routerLink: ['configuracao']
          },
          {
            label:'Banco de Dados',
            icon: 'fa fa-fw fa-calendar',
            routerLink: ['banco']
          },
          {
            label:'Cliente',
            icon: 'fa fa-fw fa-calendar',
            routerLink: ['cliente']
           },
          {
            label:'Segurança',
            icon: 'fa fa-fw fa-calendar',
            routerLink: ['seguranca']
            },
          {
            label:'Tabela',
            icon: 'fa fa-fw fa-calendar',
            routerLink: ['tabela']
            },
           {
            label:'Usuário',
            icon: 'fa fa-fw fa-calendar',
            routerLink: ['usuario']
            },
            {
             label:'Configuração banco de dados',
             icon: 'fa fa-fw fa-calendar',
             routerLink: ['configuracao-banco-dados']
             },
           {
            label:'Sair',
            icon: 'fa fa-fw fa-calendar',
            routerLink: ['/'] 
          },
       
        ]
      }
   
  toggleSidebar(event: any) {
    this.logout()
   return
  }

  checkActiveState(givenLink: string) {
    this.itens
    console.log(this.router.url);
    if (this.router.url.indexOf(givenLink) === -1) {
      if(givenLink ==='/')
      this.logout()
      return false;
    } else {
     
      return true;
    }
  }
  logout(){
    this.usuarioService.signOut().then((value) => {
      if(!value.error){
        localStorage.removeItem('@acelerador-web:user')
        this.router.navigate(['/login'])
      }

    })
   }
}



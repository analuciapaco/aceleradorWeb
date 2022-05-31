import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email?: string;
  password?: string;
  message?: string;
  form!: FormGroup;
  url: string | undefined;
  constructor(
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.url =
      'https://www.spassu.com.br/templates/Spassu_Tecnologia/images/logo.png';
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });

   // this.usuarioService.signUp('ana@spassu.com', '123456').then((value) => {
   //   console.log(value.user);
   //   if (value.error) console.log(`Ocorreu erro ${value.error}`);
   // });
  }
  login() {
    this.spinner.show();
    this.usuarioService
      .signIn(this.form!.get('email')!.value, this.form!.get('password')!.value)
      .then((value) => {
        if (value.error) {
          this.message = `Não foi possível efetuar o login. Detalhes: ${value.error.message}`;
          this.spinner.hide();
        } else {
          localStorage.setItem('@acelerador-web:user', value.user!.email!);
          this.router.navigateByUrl('/admin/dashboard');
          this.spinner.hide();
        }
      });
  }
}

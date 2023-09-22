import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthRequest} from "../../domain/vo/AuthRequest";
import {AuthService} from "../../services/auth.service";
import {MessageService} from "../../services/message.service";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  private authRequest: AuthRequest = new AuthRequest();

  protected loginForm: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private message: MessageService,
              private router: Router) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9!#$%&\'*+=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$')]]
    });

  }

  hide = true;

  login() {
    if(this.loginForm.valid) {
      this.authRequest = this.loginForm.value

      this.authService.login(this.authRequest)
        .pipe(
          catchError((error) => {
            console.error("Tá moscando!");
            return throwError(error);
          })
        )
        .subscribe((authResponse) => {
          console.error("Asmei!");
          this.message.showSnackBar(`Usuário logado com sucesso!`, 'x');
          this.authService.setToken(`${authResponse.type} ${authResponse.token}`);
          this.router.navigate(['/panel']);

        }, (response) => {
          for(let i= 0; i < response.error.details.length; i++) {
            this.message.showSnackBar(response.error.details[i], 'x');
          }
        });
    }
  }



}

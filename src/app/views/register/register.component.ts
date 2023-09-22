import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountRequest} from "../../domain/vo/AccountRequest";
import {AuthService} from "../../services/auth.service";
import {AccountResponse} from "../../domain/vo/AccountResponse";
import {Issue} from "../../domain/exceptions/Issue";
import {catchError, throwError} from "rxjs";
import {MessageService} from "../../services/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  private accountRequest: AccountRequest = new AccountRequest();

  protected registerForm: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private message: MessageService,
              private router: Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9!#$%&\'*+=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$')]]
    });
  }

  hide = true;

  ngOnInit(): void {
    window.scroll(0,0)
  }

  register() {
    if(this.registerForm.valid) {
      this.accountRequest = this.registerForm.value

      this.authService.register(this.accountRequest)
        .pipe(
          catchError((error) => {
            console.error("Tá moscando!");
            return throwError(error);
          })
        )
        .subscribe((accountResponse) => {
          console.error("Asmei!");
          this.message.showSnackBar(`Usuário ${accountResponse.name} cadastrado com sucesso!`, 'x');
          this.router.navigate(['/login']);

      }, (response) => {
          for(let i= 0; i < response.error.details.length; i++) {
            this.message.showSnackBar(response.error.details[i], 'x');
          }
      });
    }
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ILogin} from "../../shared/models/ILogin";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {Select, Store} from "@ngxs/store";
import {SetUser} from "../../shared/state/user/user.action";


@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss']
})
export class AuthorizationPageComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  formChanges$!: Subscription;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit() {
    this.formChanges$ = this.loginForm.valueChanges.subscribe(() => {
      this.errorMessage = null;
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginModel: ILogin = this.loginForm.value as ILogin
      this.authService.login(loginModel).subscribe(
        user => {
          this.store.dispatch(new SetUser(user));
          this.router.navigate(['profile'])
        },
        error => {
          this.errorMessage = error.message;
        }
      );
    }
  }

  get isPasswordValid() {
    return this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched
  }

  ngOnDestroy(): void {
    this.formChanges$.unsubscribe()
  }
}

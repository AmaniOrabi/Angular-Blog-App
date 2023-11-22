import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: false,

  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  @Output() onReturnCLicked = new EventEmitter<void>();
  form: FormGroup;
  private _fb = inject(FormBuilder);
  private _authService = inject(AuthService);
  private _snackBarService = inject(SnackbarService);
  private _router = inject(Router);
  constructor() {
    this.form = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  signIn() {
    const payload = {
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value,
    };
    this._authService.signin(payload).subscribe(
      (response: any) => {
        this._snackBarService.successSnackbar('Welcome back !');
        localStorage.setItem('access-token', response.data.access_token);
        this._authService.userName$.next(payload.username);
        this._router.navigate(['/blogs']);
      },
      (response) => {
        this._snackBarService.failureSNackbar(response?.error?.message);
      }
    );
  }

  returnClicked() {
    this.onReturnCLicked.emit();
  }
}

import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { SnackbarService } from '../../../core/services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  @Output() onSignInCLick = new EventEmitter<void>();
  form: FormGroup;
  private _authService = inject(AuthService);
  private _snackBarService = inject(SnackbarService);
  private _router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    });
  }

  signUp() {
    const payload = {
      username: this.form.controls['username'].value,
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    };
    this._authService.signup(payload).subscribe(
      (response: any) => {
        this._authService.userToken$.next(response.data);
        this._snackBarService.successSnackbar('Account created successfully');
        this._router.navigate(['/blogs']);
      },
      (response) => {
        this._snackBarService.failureSNackbar(response?.error?.message);
      }
    );
  }

  signInCLick() {
    this.onSignInCLick.emit();
  }
}

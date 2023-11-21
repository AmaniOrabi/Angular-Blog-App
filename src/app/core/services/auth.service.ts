import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SignInPayload } from '../interfaces/signin.interface';
import { environment } from '../../../environment';
import { ApiRoutes } from '../constants/api-routes';
import { SignUpPayload } from '../interfaces/signup.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userToken$ = new BehaviorSubject<string>("");
  private _http = inject(HttpClient);
  constructor() {}
  signin(payload: SignInPayload) {
    const url = `${environment.apiDomain}${ApiRoutes.authSignin}`;
    return this._http.post(url, payload);
  }

  signup(payload: SignUpPayload) {
    const url = `${environment.apiDomain}${ApiRoutes.authSignup}`;
    return this._http.post(url, payload);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AccountRequest} from "../domain/vo/AccountRequest";
import {Observable} from "rxjs";
import {AccountResponse} from "../domain/vo/AccountResponse";
import {Issue} from "../domain/exceptions/Issue";
import {AuthRequest} from "../domain/vo/AuthRequest";
import {AuthResponse} from "../domain/vo/AuthResponse";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private tokenKey: string = 'auth-token';

  constructor(private http: HttpClient) { }

  register(accountRequest: AccountRequest): Observable<AccountResponse> {
    return this.http.post<AccountResponse>(`${this.baseUrl}/account`, accountRequest);
  }

  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/account/auth`, authRequest);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

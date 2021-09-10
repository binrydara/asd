import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {APIService} from "./api.service";
@Injectable({
  providedIn: 'root'
})
export class AuthService extends APIService {
  public url: string = this.getBaseUrl();
  public token = '';


  login(param:any):Observable<any> {
    return this.http.post(this.url + 'login', param);
  }
}
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(private http:HttpClient) { }

  private jsonURL = 'assets/transfers.json';

  getUserAccountSummary(): Observable<any>{
    return this.http.get(this.jsonURL);
  }
}

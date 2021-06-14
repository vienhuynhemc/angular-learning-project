import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get("https://bessenger.000webhostapp.com/sendEmail.php");
  }
}

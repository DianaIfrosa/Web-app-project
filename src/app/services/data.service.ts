import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /* Prin acest serviciu se face comunicarea dintre componentele Login si Profile */ 

  private userSource = new BehaviorSubject({
    username: '',
    password: '',
  })

  public currentUser = this.userSource.asObservable();

  constructor(public http: HttpClient) { }

  public changeUserData(user: any): void {
    this.userSource.next(user);
  }

  public login(_username: string, _password: string): Observable<any> {
    const user = {
      email: _username,
      password: _password
    }
    return this.http.post<any>(`https://localhost:44355/api/Auth/Login`, user).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  public register(_username: any, _password: any, _role: string = "Vizitator"): Observable<any> {
    const user = {
      email: _username,
      password: _password,
      role: _role
    }
    return this.http.post<any>(`https://localhost:44355/api/Auth/Register`, user)
      .pipe(
        retry(1),
        catchError(this.handleError)
      ); 
  }

  handleError(error: any) {

    var errorMessage: string;

    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = 'Invalid credentials!';

    } else {
      // server-side error
      errorMessage = 'Something went wrong, please try again!';

    }
    window.alert(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}

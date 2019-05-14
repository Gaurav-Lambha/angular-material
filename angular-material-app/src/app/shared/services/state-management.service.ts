import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {
  private userExist = new BehaviorSubject<any>(false);
  constructor() { }

  checkUserExist(data: any): Observable<any> {
    if (data.userName === 'devopps@gmail.com' && data.password === '1234') {
      this.userExist.next(true);
    }
    return this.userExist.asObservable();
  }

  setAuthSession(data) {
    sessionStorage.setItem('userSession', JSON.stringify(data));
  }

  getAuthSession() {
    return JSON.parse(sessionStorage.getItem('userSession'));
  }

}

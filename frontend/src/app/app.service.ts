import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { Seguro } from './Seguro';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string = 'http://localhost:8000/api/users/';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.userUrl}${id}/`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.userUrl}${id}/`);
  }

}


@Injectable({
  providedIn: 'root'
})

export class SeguroService {
  private seguroUrl: string = 'http://localhost:8000/api/seguros/';
  
  constructor(private http: HttpClient) { }
  
  addSeguro(seguro: Seguro): Observable<Seguro> {
    return this.http.post<Seguro>(this.seguroUrl, seguro);
  }

  getSeguros(): Observable<any[]> {
    return this.http.get<any[]>(this.seguroUrl);
  }

  getSeguro(id: number): Observable<Seguro> {
    return this.http.get<Seguro>(`${this.seguroUrl}${id}`);
  }

  updateSeguro(id: number, seguro: Seguro): Observable<Seguro> {
    return this.http.put<Seguro>(`${this.seguroUrl}${id}/`, seguro);
  }

  deleteSeguro(id: number):  Observable<Seguro> {
    return this.http.delete<Seguro>(`${this.seguroUrl}${id}/`);
  }


}

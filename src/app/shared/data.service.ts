import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTodoList() {
    return new Promise<any>((resolve, reject) => {
      this.http.get('https://jsonplaceholder.typicode.com/todos').toPromise().then((res => {
        resolve(res);
      })).catch(err => {
        reject(err);
      });
    });
  }

  getDataList() {
    return new Promise<any>((resolve, reject) => {
      this.http.get('assets/mock/grid.data.json').toPromise().then((res => {
        resolve(res);
      })).catch(err => {
        reject(err);
      });
    });
  }
}


import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
data:any;
  private user: any;
  mediafetchid:any;
  chatgroupMember:any;
  constructor(private http: HttpClient) { 
  //  this.user = JSON.parse(localStorage.getItem('user')); // to store in local storage or not
  }


  getUsers():Observable<any>{
    const url ='http://devza.com/tests/tasks/listusers';
    return this.http.get(url);
  }
  getList():Observable<any>{
    const url='http://devza.com/tests/tasks/list';
    return this.http.get(url);
  }

  updateTask(obj):Observable<any>{
    const url='http://devza.com/tests/tasks/update';
    return this.http.post(url,obj)
  }
  createTask(obj):Observable<any>{
    const url='http://devza.com/tests/tasks/create';
    return this.http.post(url,obj);
  }
  deleteTask(obj):Observable<any>{
    const url='http://devza.com/tests/tasks/delete';
    return this.http.post(url,obj)
  }
}




import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, map, take, tap } from 'rxjs/operators';
import { App } from './app';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  todoObject:any[]=[];
  saveTodo(value)
  {
    this.todoObject.push(value)
  }
  displayObjects(){
    return this.todoObject;
  }
  deleteObject(index)
  {
    this.todoObject.splice(index,1);
  }

  getOrders(){
    return this.http.get<App[]>('https://jsonplaceholder.typicode.com/todos')
    // .pipe(map(data=>data.splice(0,2)))
    // .pipe(map(data=>{}))
    // .pipe(map(res=>{
    //   for(let p of res){
    //     p.userId=p.userId+10
    //   }
    //   return res;
    // }))
 
  }

 
}

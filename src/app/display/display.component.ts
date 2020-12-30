import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import {from, pipe,of} from 'rxjs';
import { map,tap,take, debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private service:TodoService) { }
 objects:any[]=[];
  ngOnInit(): void {
    this.objects=this.service.displayObjects()
    // of(this.objects).pipe(take(2)).subscribe(data=>console.log(data));
  }
  delete(index)
  {
    this.service.deleteObject(index);
  }
  
  
}

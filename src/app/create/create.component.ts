import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  get Name(){
    return this.form.get('name');
  }
  get Age(){
    return this.form.get('age');
  }
 form:FormGroup
  constructor(private fb:FormBuilder,private service:TodoService) { 
    this.form=fb.group({
      name:['',[Validators.required]],
      age:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
    this.service.getOrders().subscribe(data=>console.log(data));
    
  }

  submit(){
    this.service.saveTodo(this.form.value);
    console.log(this.form.value);
    this.form.reset();

  }
}

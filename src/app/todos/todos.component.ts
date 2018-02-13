import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo:any;
  todos:any;
  editmode:Boolean = false;
  oldText:any;
  constructor(private _flashMessagesService: FlashMessagesService,private todoservice: TodosService) { }

  ngOnInit() {
    this.todos = this.todoservice.getTodos(); 
  }
  
  addTodo(){
    let newTodo = {
      text: this.todo
    }
    this.todoservice.addTodo(newTodo)
    this.todos.push(newTodo);
    this._flashMessagesService.show('Added Todo Successfully! Todo name is ' + this.todo, { cssClass: 'alert-success' });
    this.todo = ""; 
  }

  deleteTodo(todoText){
    // for(let i =0; i<this.todos.length; i++){
    //   if(this.todos[i].text === todoText){
    //     this.todos.splice(i,1);
    //     break;
    //   }
    // }
    this.todos = this.todos.filter(todo => todo.text != todoText);
    this.todoservice.deleteTodo(todoText);
    this._flashMessagesService.show('Deleted Todo Successfully! Todo name is ' + todoText, { cssClass: 'alert-success' });
  }

  editTodo(todoText){
    this.editmode = !this.editmode;
    this.oldText = todoText;
    this.todo = todoText;
  }
  updateTodo(){
    // for(let i=0; i<this.todos.length; i++){
    //   if(this.todos[i].text === this.oldText){
    //     this.todos[i].text = this.todo;
    //   }
    // }
    //debugger;
    this.todos = this.todos.filter(todo => (todo.text === this.oldText) ? (todo.text = this.todo) : todo.text)
    this.todoservice.updateTodo(this.oldText,this.todo);
    this._flashMessagesService.show('Updated Todo Successfully! Todo name is ' + this.todo, { cssClass: 'alert-success' });
    this.todo = ""; 
    this.editmode = !this.editmode;
  }

}

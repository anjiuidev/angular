import { Injectable } from "@angular/core";

@Injectable()
export class TodosService {
  constructor() {}
  getTodos() {
    // alert(localStorage.getItem("todos"))
    if (
      localStorage.getItem("todos") === null ||
      localStorage.getItem("todos") === '[]' ||
      localStorage.getItem("todos") === undefined
    ) {
      console.log("No todos Found ... Initialising Default Todos....");
      let todos = [
        {
          text: "wake up Early Morning"
        },
        {
          text: "Go to the Class"
        },
        {
          text: "Go to office"
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos)); 
      return todos;
    } else {
      console.log("Todos Found ... Getting Todos From LocalStorage....");
      let todos = JSON.parse(localStorage.getItem("todos"));
      return todos;
    }
  }

  addTodo(todo){
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos)); 
  }
  deleteTodo(todoText){
    let todos = JSON.parse(localStorage.getItem("todos"));
    // for(let i =0; i<todos.length; i++){
    //   if(todos[i].text === todoText){
    //     todos.splice(i,1);
    //     break;
    //   }
    // }
    todos = todos.filter(todo => todo.text != todoText);
    localStorage.setItem('todos', JSON.stringify(todos)); 
  }

  updateTodo(oldText, newText){
    let todos = JSON.parse(localStorage.getItem("todos"));
    // for(let i =0; i<todos.length; i++){
    //   if(todos[i].text === oldText){
    //     todos[i].text = newText;
    //     break;
    //   }
    // }
    
    todos = todos.filter(todo => (todo.text === oldText) ? (todo.text = newText) : todo.text)
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  
}

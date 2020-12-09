import { Component } from '@angular/core';
import { Todos } from './todo';
import { TodoService } from './todo.service';


  
@Component({
  selector: 'todolist-app',
  templateUrl: `./app/app.component.html`
})
export class AppComponent{ 
  title="ToDoList";
  private todos: Todos[];
  
  constructor(private todoService: TodoService) { }


  ngOnInit(){
    this.todos=this.todoService.getTodo();
  }

  addTodo(newTodoLabel: string){
    var newTodo: Todos={
      label: newTodoLabel,
      done: false
    }
    var pass: boolean=true;
    this.todos.forEach(Todos => {
      if(newTodoLabel==Todos.label){
        pass=false;
      }
    });
    if(pass==true){
      this.todos.push(newTodo);
    }
  }

  delete(todo: Todos){
    this.todos=this.todos.filter((t=>t.label !==todo.label));
  }

  switchDone(todo: Todos){
    if(todo.done==false){
      todo.done=true;
    }
    else{
      todo.done=false;
    }
  }
}
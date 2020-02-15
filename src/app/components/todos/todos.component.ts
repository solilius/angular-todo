import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos:Todo[];

  constructor(private todosService:TodosService) { }

  ngOnInit() {
      this.todosService.getTodos().subscribe(todos=>{
          this.todos = todos
      })
  }

  deleteTodo(todo:Todo){
      this.todos = this.todos.filter( t => t.id !== todo.id);
      this.todosService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
      this.todosService.addTodo(todo).subscribe(todo =>{
          this.todos.push(todo);
      })
  }
}

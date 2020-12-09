import { Injectable } from '@angular/core';
import { Todos } from './todo';
import { TODOS } from './todo-mock';

Injectable()
export class TodoService {
  
  // Retourne tous les services
  getTodo(): Todos[] {
    return TODOS;
  }
      
}
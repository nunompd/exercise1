import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodoItems(): Observable<any> {
    return of([{ name: 'Task 1' }, { name: 'Task 2' }]);
  }
}

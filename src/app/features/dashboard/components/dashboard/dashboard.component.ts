import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from '../../../todo/services/todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  todoItems: any[];
  private subscriptions: Subscription[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService
      .getTodoItems()
      .subscribe((items) => (this.todoItems = items));
  }

  // Is there something we can do to avoid having to unsubscribe to this subscription on the onDestroy hook?
  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

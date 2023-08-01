import { Component } from '@angular/core';
import { Task } from '../../task-interface';
import { TodolistService } from '../../Services/todolist.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private todoListService: TodolistService) {}

  get tasks(): Task[] {
    return this.todoListService.tasks;
  }

  get percentage(): number {
    return this.todoListService.percentage;
  }

  recieveInput(input: string): void {
    const task: Task = {
      id: this.todoListService.generateRandomId(),
      value: input,
      checked: false,
    };
    this.todoListService.addNewTask(task);
  }
}

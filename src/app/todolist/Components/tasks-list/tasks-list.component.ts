import { Component, Input } from '@angular/core';
import { Task } from '../../task-interface';
import { TodolistService } from '../../Services/todolist.service';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent {
  @Input() tasksList: Task[] = [];

  constructor(private todolistService: TodolistService) {}

  deleteButton(task: Task): void {
    const { id } = task;
    this.todolistService.deleteTask(id);
  }

  onChange(task: Task): void {
    task.checked = !task.checked;
    this.todolistService.calculatePercentage();
  }
}

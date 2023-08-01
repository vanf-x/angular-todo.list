import { Injectable } from '@angular/core';
import { Task } from '../task-interface';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  constructor() {}
  public tasks: Task[] = [];
  public percentage: number = 0;

  generateRandomId(): string {
    const randomId = Date.now().toString().substr(2);
    return randomId;
  }

  addNewTask(task: Task): void {
    this.tasks.push(task);
    this.calculatePercentage();
  }

  removeChecked(): void {
    this.tasks = this.tasks.filter((task) => !task.checked);
    this.calculatePercentage();
  }

  calculatePercentage(): void {
    let counter = 0;
    this.tasks.forEach((task) => {
      if (task.checked) {
        counter++;
      }
    });
    if (this.tasks.length > 0) {
      this.percentage = Math.round((counter * 100) / this.tasks.length);
    } else {
      this.percentage = 0;
    }
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.calculatePercentage();
  }
}

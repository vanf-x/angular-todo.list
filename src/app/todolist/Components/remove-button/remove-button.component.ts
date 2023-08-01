import { Component, Input } from '@angular/core';
import { Task } from '../../task-interface';
import { TodolistService } from '../../Services/todolist.service';

@Component({
  selector: 'remove-button',
  templateUrl: './remove-button.component.html',
  styleUrls: ['./remove-button.component.css'],
})
export class RemoveButtonComponent {
  constructor(private todolistService: TodolistService) {}

  removeChecked(): void {
    this.todolistService.removeChecked();
    this.todolistService.calculatePercentage();
  }
}

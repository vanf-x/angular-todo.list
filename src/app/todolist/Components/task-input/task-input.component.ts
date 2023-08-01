import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css'],
})
export class TaskInputComponent {
  @Output() inputEmitter = new EventEmitter<string>();

  taskInput: string = '';

  sendInput(): void {
    this.inputEmitter.emit(this.taskInput);
    this.taskInput = '';
  }
}

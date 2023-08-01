import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { TaskInputComponent } from './Components/task-input/task-input.component';
import { PercentageBarComponent } from './Components/percentage-bar/percentage-bar.component';
import { TasksListComponent } from './Components/tasks-list/tasks-list.component';
import { FormsModule } from '@angular/forms';
import { RemoveButtonComponent } from './Components/remove-button/remove-button.component';

@NgModule({
  declarations: [
    MainPageComponent,
    TaskInputComponent,
    PercentageBarComponent,
    TasksListComponent,
    RemoveButtonComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
})
export class TodolistModule {}

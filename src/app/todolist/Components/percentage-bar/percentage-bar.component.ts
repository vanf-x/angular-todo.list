import { Component, Input } from '@angular/core';
import { TodolistService } from '../../Services/todolist.service';

@Component({
  selector: 'percentage-bar',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.css'],
})
export class PercentageBarComponent {
  @Input() percentage: number = 0;
}

import { Component, Input } from '@angular/core';

import { ITaskDto } from './../interfaces/ITaskDto';

@Component({
  selector: 'app-tasks-detail',
  templateUrl: './tasks-detail.component.html',
  styleUrls: ['./tasks-detail.component.css']
})

export class TasksDetailComponent {
  ngOnInit(): void {

  }

  @Input() taskToDetail!: ITaskDto;
  @Input() public finishPreview!: () => void;

  closePreview() {
    this.finishPreview();
  }
}

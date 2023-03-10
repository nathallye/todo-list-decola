import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ITaskDto } from './../interfaces/ITaskDto';

@Component({
  selector: 'app-tasks-edit',
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.css']
})

export class TasksEditComponent {
  taskDto: ITaskDto = { id: 0, name: '' };

  editTask() {
    // atualizar a informação
    // redirecionar para tela de lista
    this.router.navigate(['lista']);
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    let idReceived: number;
    this.route.paramMap.subscribe(params => {
      idReceived = Number(params.get('id'));
      console.log(`Id que recebi para detalhar e atualizar as informações: ${idReceived}`);
    });
  }
}

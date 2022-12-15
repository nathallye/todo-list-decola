import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild} from '@angular/core';

import { ITaskDto } from './interfaces/ITaskDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger("moveInLeft", [transition("void=> *", [style({ transform: "translateX(300px)" }), animate(200, keyframes([style({ transform: "translateX(300px)" }), style({ transform: "translateX(0)" })]))]),
  transition("*=>void", [style({ transform: "translateX(0px)" }), animate(100, keyframes([style({ transform: "translateX(0px)" }), style({ transform: "translateX(300px)" })]))])])
  ]
})

export class AppComponent {
  // title = 'todo-list-decola';
  arrayTasks: string[] = [];
  listTasksTyped: ITaskDto[] = [];
  idTask: number = 1;
  nameTaskModel: string = '';
  @ViewChild("task") inputNameTask!: ElementRef; // variável inputNameTask é uma referência ao elemento html input com name "task"

  addTask(value: string) {
    // this.arrayTasks.push(value);
    this.listTasksTyped.push({ id: this.idTask, name: value });

    this.idTask++;
    console.log(`Adicionando a tarefa ${value}`);

    this.nameTaskModel = '';
    this.inputNameTask.nativeElement.focus();
  }

  // sempre remover itens do array de trás pra frente
  removeTask(id: number) {
    for (let i = 0; i < this.listTasksTyped.length; i++) {
      // console.log(`Objeto da lista: ${JSON.stringify(this.listTasksTyped[i])}`);
      if (id == this.listTasksTyped[i].id) {
        this.listTasksTyped.splice(i, 1);
        console.log(`Removendo a tarefa com id: ${id}`);
      }
    }
  }

  submitFormTask(valueForm: any) {
    console.log(`Valor do formulário: ${JSON.stringify(valueForm)}`);

    this.addTask(valueForm.task);
  }

  constructor() {

  }
}

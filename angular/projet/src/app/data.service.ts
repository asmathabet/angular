import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  constructor() { }

  task:string="";
  tasks =[];
  ajoutItem(t:string) {
    this.tasks.push(t);
    this.task="";
  }
  supprimeItem(task:string) {
    this.tasks.splice(this.tasks.indexOf(task),1);
  }
}

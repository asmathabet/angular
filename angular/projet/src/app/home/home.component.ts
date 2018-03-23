import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //providers:[]
})
export class HomeComponent implements OnInit {

  cpt : number;
  btnTxt : string="Add new Item";
  //task : string="";
  //tasks =[];
  task:string;
  tasks : any[];

  constructor(private data:DataService) {  }

  ngOnInit() {
    this.task=this.data.task;
    this.tasks=this.data.tasks;
    this.cpt=this.tasks.length;
  }

  ajoutItem() {
    this.data.ajoutItem(this.task);
    this.cpt=this.tasks.length;
  }

  supprimeItem(t:string) {
    this.data.supprimeItem(t);
    this.cpt=this.tasks.length;
  }

/*
  ajoutItem() {
    this.tasks.push(this.task);
    this.task="";
    this.cpt=this.tasks.length;
  }
  supprimeItem(task:string) {
    this.tasks.splice(this.tasks.indexOf(task),1);
    this.cpt=this.tasks.length;
  }
  */
  getColor() {
    if (this.task.charAt(0)=='A') {
      return 'green';
    } 
    else if (this.task.charAt(0)=='B') {
      return 'red';
    }
  }
}

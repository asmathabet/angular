import { DataService } from './../data.service';
import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private router: Router;
  donne : string;
  
  constructor(private data:DataService) {  }
  
  ngOnInit() {
    this.donne = this.data.task;
  }

  sendMeHome(){
    this.router.navigate(['']) //path :'' of home component
  }

}

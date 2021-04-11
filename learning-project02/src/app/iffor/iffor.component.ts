import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iffor',
  templateUrl: './iffor.component.html',
  styleUrls: ['./iffor.component.scss']
})
export class IfforComponent implements OnInit {

  show = false;
  array = ["a","b","c","d","e"];

  constructor() { }

  changeShow():void{
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

}

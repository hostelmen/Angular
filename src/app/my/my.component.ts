import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  items = [{firstName: 'Mark',secondName: 'Otto', acount: 12},{firstName: 'Mark',secondName: 'Otto', acount: 15},{firstName: 'Mark',secondName: 'Otto', acount: 23}]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  // SELECTING BY ELEMENT
  selector: 'app-servers',
  // most often used for components

  // SELECTING BY ATTRIBUTE
  // selector: '[app-servers]',
  // file needs to then have a html component with app-servers attribute

  // SELECTING BY CLASS
  // selector: '.app-servers',
  // file needs html component with attribute class="app-servers"

  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

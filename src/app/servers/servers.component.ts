import { Component, OnInit } from '@angular/core';

@Component({
  // SELECTING BY ELEMENT
  // most often used for components

  selector: 'app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']

  // SELECTING BY ATTRIBUTE
  // selector: '[app-servers]',
  // file needs to then have a html component with app-servers attribute

  // SELECTING BY CLASS
  // selector: '.app-servers',
  // file needs html component with attribute class="app-servers"

  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-log',
  templateUrl: './display-log.component.html',
  styleUrls: ['./display-log.component.css']
})
export class DisplayLogComponent implements OnInit {
  displayStatus = 'Display Details';
  showPassword = false;
  buttonClicked = false;
  clickLog = [];

  constructor() {

  }

  ngOnInit(): void {
  }

  updateDisplayStatus(): string {
    if (this.displayStatus === 'Display Details') {
      this.displayStatus = 'Hide Details';
    } else if (this.displayStatus === 'Hide Details') {
      this.displayStatus = 'Display Details';
    }
    this.showPassword = !this.showPassword;
    this.buttonClicked = true;
    this.clickLog.push(this.clickLog.length + 1);

    return this.displayStatus;
  }

}

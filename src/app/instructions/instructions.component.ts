import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToSearch() {
    var body = document.getElementsByTagName("body")[0];
    document.getElementById("search").scrollIntoView()
    console.log("test")
  }
}

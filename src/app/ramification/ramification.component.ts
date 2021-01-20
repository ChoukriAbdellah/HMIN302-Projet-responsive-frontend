import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ramification',
  templateUrl: './ramification.component.html',
  styleUrls: ['./ramification.component.scss']
})
export class RamificationComponent implements OnInit {

  @Input() ramification : String
  @Input() text:String
  styles=[
    'default', 'primary', 'success', 'info', 'warning', 'danger', 'neutral'
  ]
  style=""
  
  
  constructor() {
    this.style= this.randomStyle()
   }
 
 

  randomStyle(){
    var  style = this.styles[Math.floor(Math.random() * this.styles.length)]
    style= "badge badge-"+style+" mr-1"
    return style;
  }
  ngOnInit() {
   
}
}

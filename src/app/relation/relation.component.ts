import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { INodeCouple } from '../shared/INodeCouple';
@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.scss']
})
export class RelationComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  @Input() index: number
  @Input() list: []
  constructor() { }

  ngOnInit(): void {
    
    
  }
cambio(){
  const total=this.viewport.measureScrollOffset();
  
  const posicion = this.viewport.getRenderedRange().start;
  
  if((posicion>this.list.length/2)&&(posicion<this.list.length/2+10)){
alert("has llegado casi a la mitad");
//this.list = Array(800).fill(0);
  }
}

}

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
  
  
}

}

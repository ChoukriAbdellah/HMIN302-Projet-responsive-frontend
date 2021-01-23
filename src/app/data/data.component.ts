import { Component, Input, OnInit } from '@angular/core';
import noUiSlider from "nouislider";
import {IData} from '../shared/IData'

import {
  FadeGrowSequence,
  FadeGrowGroup,
  FadeGrowStagger,
} from './sequence.animation';

type TSequence = 'SEQUENCE' | 'GROUP' | 'STAGGER' | null;

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  animations: [FadeGrowSequence, FadeGrowGroup, FadeGrowStagger],
})
export class DataComponent implements OnInit {
  
  
  @Input() defs : String[];
  @Input() ramifications : String[];
  sequenceSelected: TSequence = 'STAGGER';
  sequenceChangeQueued: TSequence = 'STAGGER';

  constructor() {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  ngOnInit() {
    
   
  }
  ngOnDestroy() {
    
  }

  selectSequence(sequence: TSequence): void {
    this.sequenceSelected = null;
    this.sequenceChangeQueued = sequence;
  }
  animationDone(): void {
    this.sequenceSelected = 'STAGGER'
  }
}
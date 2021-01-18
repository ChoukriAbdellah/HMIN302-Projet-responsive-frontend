import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { IData } from '../shared/IData';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  mot = '';
  search ='';
  defs = []  ;
  notFound = false;
    constructor(private dataService: DataService,) {}
   
    ngOnInit() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("index-page");
      
      
    }
    formSubmit() {
      this.notFound = false;
      this.defs=[];
      
        console.log("mot en entré :  "+ this.mot);
        
        
        
        this.dataService.loadData(this.mot).subscribe(resultat => {
            
  
            if(resultat.status != 404){
              this.defs= resultat.defs;        
            }
          else{
            alert('Aucun résultat pour cette recherche.');
            this.notFound= true;  
            this.defs = [];
          }
        
  
        
      });
    
   
  }
  ngOnDestroy() {
      
  }
}


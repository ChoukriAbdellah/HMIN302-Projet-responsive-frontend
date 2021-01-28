import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { AllRelationsTypes } from '../shared/allRelationsTypes';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search = ''
  relation= ''
  defs = []  
  allRelationships = AllRelationsTypes
  ramifications= []
  relations_types=[]
  relation_node_couple = []
  filtered_data=[]
  current_type=""
  current_index= 0 
  notFound = false
  filter=false
    constructor(private dataService: DataService,) {
      //this.filtered_data=[]
    }
   
   
    ngOnInit() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("index-page")
      this.current_type=''
    }
    //
    filterData(value:string) {
      if(this.relation != '' ){
        this.filter=true
        var i: number = +value;
        this.filtered_data= this.relation_node_couple[i]
        this.scroll("relation")
      }
      else{
        this.filter=false
      }
      
    }
    //
    formSubmit() {
      
      this.notFound = false;
      this.defs=[]
      this.ramifications= []
      this.relation_node_couple=[]
      
        this.dataService.loadData(this.search).subscribe(result => {

            if(result.status != 404){
              this.defs= result.defs
              this.ramifications= result.ramifications
              this.relations_types = result.relations_types
              this.filterData(AllRelationsTypes[this.relation])
              this.scroll("data")
              for(let i of result.relations_types){
                this.relation_node_couple.push(result.relation_node_couple[i])
                
              } 
              
            }
          else{
            alert('Aucun résultat pour cette recherche.');
            this.notFound= true;  
            this.defs = [];
          }  
        
      });
    
   
  }
  getRelationTypeByIndex(index: number){
    if(!this.notFound){
      
      return AllRelationsTypes[index]
      
    }
  }
  scroll(id:string) {
    var body = document.getElementsByTagName("body")[0];
    document.getElementById(id).scrollIntoView()
  }
  ngOnDestroy() {
      
  }
}


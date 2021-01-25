import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  mot = ''
  search =''
  defs = []  
  ramifications= []
  relations_types=[]
  relation_node_couple = []
  current_list=[]
  current_index= 0
  size_array_r_n_c=0
  
  notFound = false
    constructor(private dataService: DataService,) {}
   
    ngOnInit() {
      var body = document.getElementsByTagName("body")[0];
      body.classList.add("index-page")
      console.log("size ", this.relation_node_couple )

      
    }
    counter() {
      return [this.relations_types.length]
  }
    formSubmit() {
      this.notFound = false;
      this.defs=[]
      this.ramifications= []
      this.relation_node_couple=[]
      
        console.log("mot en entré :  "+ this.mot)
        
        
        
        this.dataService.loadData(this.mot).subscribe(result => {
          
  
            if(result.status != 404){
              this.defs= result.defs
              this.ramifications= result.ramifications
              this.relations_types = result.relations_types
              for(let i of result.relations_types){
                this.relation_node_couple.push(result.relation_node_couple[i])
                
              }
             
              this.getCurrentList()
              
              
              
            }
          else{
            alert('Aucun résultat pour cette recherche.');
            this.notFound= true;  
            this.defs = [];
          }
        
  
        
      });
    
   
  }
  getCurrentList(){
    if(!this.notFound){
      console.log("getCurrentList is called" )
      this.current_list=this.relation_node_couple[this.current_index]
      this.current_index++
    }
  }
  ngOnDestroy() {
      
  }
}


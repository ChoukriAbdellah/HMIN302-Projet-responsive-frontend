import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IData } from './IData';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  IDatas: Observable<IData> ;


  constructor(private httpClient: HttpClient ) { }
loadData(word : string): Observable<IData> {
    return this.httpClient.get<IData>('http://localhost:3000/getData/?word='+word,{
 
    })
   
  }
}

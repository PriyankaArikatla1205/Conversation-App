import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DataSetType {
Person: string;
 text : string;
}
@Injectable({
  providedIn: 'root'
})

export class ConversationService {

  constructor(private http:HttpClient) {}
    getDatasetTypes(): Observable<Array<DataSetType>> {
      return  this.http.get<Array<DataSetType>>("assets/conf/dataset_types2.json");
    
   }
}

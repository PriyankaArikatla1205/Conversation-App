import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DataSetType {
  name: string;
  display_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getDatasetTypes(): Observable<Array<DataSetType>> {
    return this.http.get<Array<DataSetType>>("assets/conf/dataset_types1.json");
  }
}
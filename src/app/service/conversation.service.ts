import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export interface DataSetType {
// Person: string;
//  text : string;
// }
@Injectable({
  providedIn: 'root'
})

export class ConversationService {

  constructor(private http:HttpClient) {}
  activity(): Observable<any> {
    return this.http.get<any>("https://backend.skill2030.com/asees/activities?id=2965");
  }
   
    
   }




import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data1Service, DataSetType } from 'src/app/service/data1.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  datasetTypes$: Observable<Array<DataSetType>>;
  selected_type: string|undefined;

  constructor(private dataService:Data1Service) {
    this.datasetTypes$ = this.dataService.getDatasetTypes();
  }
 
  ngOnInit(): void {
  }

}

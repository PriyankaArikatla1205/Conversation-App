import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, DataSetType } from 'src/app/service/data.service';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  datasetTypes$: Observable<Array<DataSetType>>;
  selected_type: string|undefined;

  constructor(private dataService:DataService) {
    this.datasetTypes$ = this.dataService.getDatasetTypes();
  }

  ngOnInit(): void {
  }

}

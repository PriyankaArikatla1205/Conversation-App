import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConversationService, DataSetType } from 'src/app/service/conversation.service';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  datasetTypes$: Observable<Array<DataSetType>> | undefined;
  constructor(private conversationService:ConversationService) { 

    
    this.datasetTypes$ = this.conversationService.getDatasetTypes();
  }

  ngOnInit(): void {
  }

}

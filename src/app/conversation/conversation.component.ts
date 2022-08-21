import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConversationService } from 'src/app/service/conversation.service';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  activity$: Observable<Array<any>> | undefined;
  constructor(private conversationService:ConversationService) { 

    
   
  }

  ngOnInit(): void {
    this.activity$ = this.conversationService.activity();
  }

}

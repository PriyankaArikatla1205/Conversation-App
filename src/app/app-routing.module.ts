import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './language/language.component';
import { RoleComponent } from './role/role.component';
import { LessonDescriptionComponent } from './lesson-description/lesson-description.component';
import { ConversationComponent } from './conversation/conversation.component';

const routes: Routes = [{ 
  path:"l",
  component: LanguageComponent
},
{ 
  path:"r",
  component: RoleComponent
},
{ 
  path:"de",
  component: LessonDescriptionComponent
},

{ 
  path:"cn",
  component: ConversationComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

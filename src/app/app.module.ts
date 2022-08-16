import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from'@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select';
import { LanguageComponent } from './language/language.component';
import { RoleComponent } from './role/role.component';
import {MatRadioModule} from '@angular/material/radio';
import { LessonDescriptionComponent } from './lesson-description/lesson-description.component';
import { ConversationComponent } from './conversation/conversation.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { XttpInterceptorInterceptor } from './xttp-interceptor.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    RoleComponent,
    LessonDescriptionComponent,
    ConversationComponent,
   
   
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FlexLayoutModule,
    MatIconModule,
    MatRadioModule,
    MatProgressBarModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XttpInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

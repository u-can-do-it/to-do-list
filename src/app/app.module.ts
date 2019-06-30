import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { TodoService } from "./services/todo.service";
import { TodoControllerComponent } from "./components/todo-controller/todo-controller.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoControllerComponent,
    TodoListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component } from "@angular/core";
import { TodoService } from "../app/services/todo.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor() {}
  title = "todolist";
}

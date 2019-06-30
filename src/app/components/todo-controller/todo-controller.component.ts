import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo-controller",
  templateUrl: "./todo-controller.component.html",
  styleUrls: ["./todo-controller.component.scss"]
})
export class TodoControllerComponent implements OnInit {
  private taskText: string;

  constructor(private todoService: TodoService) {
    this.taskText = "";
  }

  ngOnInit() {}
  private addTask(): void {
    this.todoService.addTask(this.taskText);
    this.taskText = "";
  }

  // calling addTask when user press the enter in a input form.
  onKeydown(event): void {
    event.key === "Enter" ? this.addTask() : null;
  }

  private clearTasks(): void {
    this.todoService.clearTasks();
  }

  private removeTask(): void {
    this.todoService.removeTasks();
  }
}

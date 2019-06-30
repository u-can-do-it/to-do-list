import { Injectable } from "@angular/core";
import { Task } from "../models/task/task";
@Injectable({
  providedIn: "root"
})
export class TodoService {
  localKey: string = "tasks";
  private tasks: Task[];
  private nextId: number;

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem(this.localKey));
    if (!this.tasks) {
      this.tasks = [];
    }
    this.nextId = this.tasks.length;
  }

  //adds task on the begining of the list
  public addTask(text: string): void {
    const task = new Task(this.nextId, text);
    this.tasks.unshift(task);
    this.nextId++;
    this.saveInLocalStorage(this.tasks);
  }

  public getTasks(): Task[] {
    return this.tasks;
  }

  //removes last task from list of tasks
  public removeTasks(): void {
    this.tasks.splice(0, 1);
    this.nextId = this.tasks.length;
    this.saveInLocalStorage(this.tasks);
  }

  //deletes all tasks
  public clearTasks(): void {
    this.tasks = [];
    this.nextId = 0;
    window.localStorage.removeItem(this.localKey);
  }

  private saveInLocalStorage(tasks: Task[]): void {
    localStorage.setItem(this.localKey, JSON.stringify(this.tasks));
  }
}

export class Task {
  id: number;
  text: string;

  constructor(id: number, text: string) {
    this.id = id;
    this.text = `Task number ${this.id + 1} ${text}`;
  }
}

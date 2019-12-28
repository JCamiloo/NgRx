export class Todo {
  id: number;
  content: string;
  completed: boolean;

  constructor(content: string) {
    this.id = Math.random();
    this.content = content.charAt(0).toUpperCase() + content.slice(1);
    this.completed = false;
  }
}
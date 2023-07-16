export interface Task {
  id?: string;
  title: string;
  description: string;
  condition?:boolean;
  subtask?:string[];
}

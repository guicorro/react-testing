export interface ICard {
  id: string;
  title: string;
  description: string;
  tasks: Array<ITask>;
  status: string;
}

export interface ITask {
  done: boolean;
  name: string;
}

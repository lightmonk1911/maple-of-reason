export interface ITaskProps extends ITask {
  className?: string;
}

export interface ITask {
  name: string;
  id: string;
  duration?: number;
}

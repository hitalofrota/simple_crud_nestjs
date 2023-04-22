import { Task } from '../task/task';
export declare class TaskService {
    tasks: Task[];
    getAll(): Task[];
    getById(id: number): Task;
    create(task: Task): void;
    update(task: Task): void;
    delete(id: number): void;
}

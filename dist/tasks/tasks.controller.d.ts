import { TaskService } from './shared/task.service/task.service';
import { Task } from './shared/task/task';
export declare class TasksController {
    private taskService;
    constructor(taskService: TaskService);
    getAll(): Promise<Task[]>;
    getById(id: string): Promise<Task>;
    create(task: Task): Promise<Task>;
    update(id: string, task: Task): Promise<Task>;
    delete(id: string): Promise<void>;
}

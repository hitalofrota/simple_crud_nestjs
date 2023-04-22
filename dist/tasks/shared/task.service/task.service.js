"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
let TaskService = class TaskService {
    constructor() {
        this.tasks = [
            { id: 1, description: 'Tarefa 1', completed: false },
            { id: 2, description: 'Tarefa 2', completed: false },
            { id: 3, description: 'Tarefa 3', completed: true },
            { id: 4, description: 'Tarefa 4', completed: false },
            { id: 5, description: 'Tarefa 5', completed: false },
            { id: 6, description: 'Tarefa 6', completed: false },
            { id: 7, description: 'Tarefa 7', completed: false },
            { id: 8, description: 'Tarefa 8', completed: false },
            { id: 9, description: 'Tarefa 9', completed: false },
            { id: 10, description: 'Tarefa 10', completed: false },
        ];
    }
    getAll() {
        return this.tasks;
    }
    getById(id) {
        const task = this.tasks.find((value) => value.id == id);
        return task;
    }
    create(task) {
    }
    update(task) {
    }
    delete(id) {
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map
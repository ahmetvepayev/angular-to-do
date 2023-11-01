import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { EventEmitterService } from '../event-emitter.service';

@Component({
    selector: 'app-to-do',
    templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

    constructor(
        private eventEmitterService: EventEmitterService
    ) {
        eventEmitterService.addSubTaskButtonClicked.subscribe((params: {text: string, parentTask: Task}) => { this.addSubtask(params.text, params.parentTask) });
    }

    ngOnInit(): void {
        this.getTasks();
    }

    private tasksRaw: Task[] = [
        {
            id: 1,
            text: "Task Text 1",
            subTasks: []
        },
        {
            id: 2,
            text: "Task Text 2",
            subTasks: []
        },
        {
            id: 3,
            text: "Task Text 3",
            subTasks: []
        }
    ]

    public tasks: Task[] = [];

    private getTasks(): void {
        this.tasks = this.tasksRaw.sort((x, y) => y.id - x.id);
    }

    public add(taskText: string) {
        var newId = this.tasks[0].id + 1;
        this.tasks.unshift({ id: newId, text: taskText, subTasks: [] } as Task);
    }

    public addSubtask(taskText: string, parentTask: Task) {
        var newId = parentTask.subTasks.length === 0 ? 1 : parentTask.subTasks[0].id + 1;
        parentTask.subTasks.unshift({ id: newId, text: taskText, subTasks: [] } as Task);
    }
}

import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
    selector: 'app-to-do',
    templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

    ngOnInit(): void {
        this.getTasks();
    }

    private tasksRaw: Task[] = [
        {
            id: 1,
            text: "Task Text 1"
        },
        {
            id: 2,
            text: "Task Text 2"
        },
        {
            id: 3,
            text: "Task Text 3"
        }
    ]

    public tasks: Task[] = [];

    private getTasks(): void {
        this.tasks = this.tasksRaw.sort( (x, y) => y.id - x.id);
    }

    public add(taskText: string) {
        var newId = this.tasks[0].id + 1;
        this.tasks.unshift({ id: newId, text: taskText } as Task);
    }
}

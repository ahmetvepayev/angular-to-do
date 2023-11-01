import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
    
    constructor(
        private eventEmitterService: EventEmitterService
    ) {
        
    }

    @Input() public task?: Task;

    public isChecked: boolean = false;

    public addSubtaskInputVisible: boolean = false;

    public toggle(){
        if (this.isChecked) {
            this.textCss['text-decoration'] = "line-through";
        }
        else{
            this.textCss['text-decoration'] = "";
        }
    }

    public readonly textCss = {
        "text-decoration": ""
    }

    public clickAddSubtask() {
        this.addSubtaskInputVisible = true;
    }

    public submitSubtaskText(text: string) {
        this.eventEmitterService.addSubTaskButtonClicked.emit({text: text, parentTask: this.task});
        this.addSubtaskInputVisible = false;
    }
}

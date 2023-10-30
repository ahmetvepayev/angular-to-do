import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input() public taskText: string = "Default task text.";

    public isChecked: boolean = false;

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
}

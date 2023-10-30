import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-to-do',
    templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
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

import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

    public newTaskButtonClicked: EventEmitter<any> = new EventEmitter();

    public addSubTaskButtonClicked: EventEmitter<any> = new EventEmitter();
}

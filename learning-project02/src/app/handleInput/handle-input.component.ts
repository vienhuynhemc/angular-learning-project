import { Component } from '@angular/core';

@Component({
    selector: "handle-input"
    , templateUrl: "./handle-input.component.html",
    styleUrls: ['./handle-input.component.scss']
})

export class HandleInputComponent {
    name = "";
    name2 = "";

    getColor(lenght: any) {
        if (lenght % 2 == 0)
            return {color: 'red',fontSize: '40px'};
        else return {color:'black'};
    }

    getClass(lenght: any) {
        if (lenght % 2 == 0)
            return {'circle':true};
        else return {'square':true};
    }

    changeName(event: Event) {
        this.name = (<HTMLInputElement>event.target).value;
    }

    changeName2() {
        this.name2 = "fff";
    }
}
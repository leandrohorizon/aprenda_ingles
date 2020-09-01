import { Component } from '@angular/core';

@Component({
    //selector: '[app-top]', // se torna atributo
    selector: 'app-top',
    templateUrl: './top.component.html',
    // template: `<p>this is top component</p>` com backticks é possivel quebrar linha
    styleUrls: ['./top.component.css']
    // styles: ['.example{ color: red }']
})
export class TopComponent {
    public title: string = 'Learning English';
}
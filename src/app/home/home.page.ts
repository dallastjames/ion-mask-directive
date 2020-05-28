import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    public control: FormControl = new FormControl('');
    // Examples here: https://text-mask.github.io/text-mask/
    public mask: any[] = [
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/
    ];

    constructor() {}

    public checkValue(value: any) {
        console.log(value);
    }
}

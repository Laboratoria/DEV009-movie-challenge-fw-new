import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
}) 
export class MiComponente {

    public title: string;
    public movies: Array<any>;
    public year: number;

    constructor() {
        this.title = 'First K-Horror Movie app';
        this.movies = [
            {
                title: 'The Shining',
                year: 1980
            },
            {
                title: 'The Conjuring',
                year: 1990
            },
            {
                title: 'The Dark Knight',
                year: 2008
            },
            {
                title: 'The Dark Knight Rises',
                year: 2012
            },
            {
                title: 'The Prestige',
                year: 2006
            },
            {
                title: 'The Matrix',
                year: 1999
            },
            {
                title: 'The Matrix Reloaded',
                year: 2003
            },
            {
                title: 'The Matrix Revolutions',
                year: 2003
            }
        ];
        this.year = new Date().getFullYear();
    
    }
}
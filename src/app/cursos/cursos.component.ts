import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor() {
    this.nomePortal = 'http://www.google.com.br';

    for (let i = 0; i < this.cursos.length; i++) {
        const curso = this.cursos[i];
    }
  }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(
    private cursosService: CursosService
  ) {
    this.nomePortal = 'http://www.google.com.br';

    // for (let i = 0; i < this.cursos.length; i++) {
    //     const curso = this.cursos[i];
    // }

    // let servico = new CursosService();
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}

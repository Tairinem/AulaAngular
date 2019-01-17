import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String = 'www.google.com.br';
  cursos: Boolean = true;

  urlDaImagem: String = 'http://lorempixel.com/400/200/';


  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}

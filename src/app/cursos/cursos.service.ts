import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private cursosService: CursosService) { }

  getCursos() {
    return ['Java', 'Ext JS', 'Angular'];
  }
}

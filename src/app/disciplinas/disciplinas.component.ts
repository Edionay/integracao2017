import { Component, OnInit } from '@angular/core';
import { cursoES, Disciplina } from "../../assets/data/engenhariaDeSoftware";

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  es = cursoES;
  disciplinaDoModal: Disciplina;
  constructor() {
    this.disciplinaDoModal = {
      id: 0,
      nome: 'teste',
      ementa: [],
      cargaHorariaTotal: 0,
      cargaHorariaTeorica: 0,
      cargaHorariaPratica: 0,
      periodo: 0,
      obrigatoria: '',
      preRequisitos: [""],
      nucleo: '',
      bibliografia: []
    };
  }

  ngOnInit() {
  }

  definirDisciplinaDoModal(posicao: number, periodo: number): void {
    this.disciplinaDoModal = this.es[periodo - 1].disciplinas[posicao];
  }
}


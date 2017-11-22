import {Component, OnInit} from '@angular/core';
import {Disciplina, disciplinas} from '../../assets/data/engenhariaDeSoftware';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  disciplinas: Disciplina[] = disciplinas;
  disciplinaQueVaiAparecerNoModal: Disciplina;
  periodo1: Disciplina[];
  periodo2: Disciplina[];
  periodo3: Disciplina[];
  periodo4: Disciplina[];
  periodo5: Disciplina[];
  periodo6: Disciplina[];
  periodo7: Disciplina[];
  periodo8: Disciplina[];
  periodo9: Disciplina[];

  constructor() {

    this.disciplinaQueVaiAparecerNoModal = {
      id: 0,
      nome: 'teste',
      ementa: [],
      cargaHorariaTotal: 0,
      cargaHorariaTeorica: 0,
      cargaHorariaPratica: 0,
      periodo: 0,
      obrigatoria: '',
      preRequisitos: [''],
      nucleo: '',
      bibliografia: [],
      unidade: '',
      relacaoComSwebok: ''
    };
  }
  ngOnInit() {
    this.periodo1 = this.disciplinas.slice(0, 4);
    this.periodo2 = this.disciplinas.slice(4, 9);
    this.periodo3 = this.disciplinas.slice(9, 14);
    this.periodo4 = this.disciplinas.slice(14, 19);
    this.periodo5 = this.disciplinas.slice(26, 30);
    this.periodo6 = this.disciplinas.slice(30, 34);
    this.periodo7 = this.disciplinas.slice(34, 39);
    this.periodo8 = this.disciplinas.slice(39, 44);
    this.periodo9 = this.disciplinas.slice(46, 47);
  }
  gerarDisciplinaModal(posicao: number): void {
    this.disciplinaQueVaiAparecerNoModal = this.disciplinas[posicao];
  }
}


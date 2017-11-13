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
      bibliografia: []
    };
  }
  ngOnInit() {
    console.log(disciplinas);
    console.log(this.disciplinas);
    this.periodo1 = this.disciplinas.slice(0, 4);
    this.periodo2 = this.disciplinas.slice(4, 9);
    this.periodo3 = this.disciplinas.slice(9, 14);
    this.periodo4 = this.disciplinas.slice(14, 19);
    this.periodo5 = this.disciplinas.slice(19, 23);
    this.periodo6 = this.disciplinas.slice(23, 27);
    this.periodo7 = this.disciplinas.slice(27, 32);
    this.periodo8 = this.disciplinas.slice(32, 37);
    this.periodo9 = this.disciplinas.slice(37);
  }
  gerarDisciplinaModal(posicao: number): void {
    this.disciplinaQueVaiAparecerNoModal = this.disciplinas[posicao];
  }
}


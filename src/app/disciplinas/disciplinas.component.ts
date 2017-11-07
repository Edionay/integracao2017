import {Component, OnInit} from '@angular/core';
import {DadosService} from '../dados.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  disciplinas: Disciplina[];
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

  constructor(private dadosJson: DadosService) {
    this.disciplinas = [];
    this.disciplinaQueVaiAparecerNoModal = {
      id: 0,
      nome: 'teste',
      ementa: [],
      cargaHorariaTotal: 0,
      cargaHorariaTeorica: '',
      cargaHorariaPratica: '',
      periodo: 0,
      obrigatoria: '',
      preRequisitos: '',
      nucleo: '',
      bibliografia: []
    };
  }
  ngOnInit() {
    this.dadosJson.baixarDados().subscribe((response: Response) => {
      this.disciplinas = response.json().disciplina;
      this.periodo1 = this.disciplinas.slice(0, 4);
      this.periodo2 = this.disciplinas.slice(4, 9);
      this.periodo3 = this.disciplinas.slice(9, 14);
      this.periodo4 = this.disciplinas.slice(14, 19);
      this.periodo5 = this.disciplinas.slice(19, 23);
      this.periodo6 = this.disciplinas.slice(23, 27);
      this.periodo7 = this.disciplinas.slice(27, 32);
      this.periodo8 = this.disciplinas.slice(32, 37);
      this.periodo9 = this.disciplinas.slice(37);

      console.log(this.periodo1);
    });
  }
  gerarDisciplinaModal(posicao: number): void {
    this.disciplinaQueVaiAparecerNoModal = this.disciplinas[posicao];
  }
}

interface Disciplina {
  id: number;
  nome: string;
  ementa: string[];
  cargaHorariaTotal: number;
  cargaHorariaTeorica: string;
  cargaHorariaPratica: string;
  periodo: number;
  obrigatoria: string;
  preRequisitos: string;
  nucleo: string;
  bibliografia: string[];
}


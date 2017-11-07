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


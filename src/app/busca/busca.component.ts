import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {Disciplina, disciplinas, Topico, topicosPpc} from '../../assets/data/engenhariaDeSoftware';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  disciplinas = disciplinas;
  topicos = topicosPpc;
  disciplinasFiltradas = this.disciplinas;
  topicosFiltrados = this.topicos;
  disciplinaQueVaiAparecerNoModal;

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
  }
  mudarValor(termo: string) {
    termo = termo.toLowerCase();
    this.disciplinasFiltradas = this.disciplinas;
    this.disciplinasFiltradas = this.disciplinasFiltradas.filter(disciplina => {
        return disciplina.nome.toLowerCase().includes(termo)
          || disciplina.ementa.some(item => item.toLowerCase().includes(termo))
          || disciplina.bibliografia.some(item => item.toLowerCase().includes(termo))
          || disciplina.relacaoComSwebok.toLowerCase().includes(termo);
      });
    this.topicosFiltrados = this.topicos;
    this.topicosFiltrados = this.topicosFiltrados.filter(topico => {
      return topico.topico.toLowerCase().includes(termo)
        || topico.descricao.some(item => item.toLowerCase().includes(termo))
        || topico.conteudo.some(subtopico =>
            subtopico.detalhe.some(detalhe => detalhe.toLowerCase().includes(termo)));
    });
  }
  gerarDisciplinaModal(posicao: number): void {
    this.disciplinaQueVaiAparecerNoModal = this.disciplinas[posicao];
  }
}

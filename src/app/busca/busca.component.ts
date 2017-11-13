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

  constructor() {
  }

  ngOnInit() {
  }
  mudarValor(termo: string) {
    this.disciplinasFiltradas = this.disciplinas;
    this.disciplinasFiltradas = this.disciplinasFiltradas.filter(disciplina => {
        return disciplina.nome.includes(termo)
          || disciplina.ementa.some(item => item.includes(termo))
          || disciplina.bibliografia.some(item => item.includes(termo));
      });
  }
}

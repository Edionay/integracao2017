import { Component, OnInit } from '@angular/core';
import {DadosService} from '../dados.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-ppc',
  templateUrl: './ppc.component.html',
  styleUrls: ['./ppc.component.css']
})
export class PpcComponent implements OnInit {

  topicos: Topico[];
  constructor(private dadosJson: DadosService) { }

  ngOnInit() {
    this.dadosJson.baixarDados().subscribe((response: Response) => {
      this.topicos = response.json().informacoes;
      console.log(this.topicos);
    });
  }
}

interface Topico {
  topico: string;
  id: string;
  descricao: string[];
  conteudo: Subtopico[];
}

interface Subtopico {
  subtopico: string;
  detalhe: string[];
}

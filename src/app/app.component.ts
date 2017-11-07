import {Component, OnInit, Output} from '@angular/core';
import {DadosService} from './dados.service';
import { Response, Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dados: any[] = [];
  constructor(private dadosJson: DadosService) {}
  ngOnInit() {

    this.dadosJson.baixarDados().subscribe((response: Response) => {
      this.dados = response.json();
    });
  }
}

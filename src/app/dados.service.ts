import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DadosService {

  enderecoJson = 'https://raw.githubusercontent.com/Edionay/integracao2017/gh-pages/data/dados.json';
  constructor(private http: Http) { }

  baixarDados(): Observable<Response> {
    return this.http.get(this.enderecoJson);
  }
}

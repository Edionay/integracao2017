import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DadosService {

  enderecoJson = 'data/dados.json';
  constructor(private http: Http) { }

  baixarDados(): Observable<Response> {
    return this.http.get(this.enderecoJson);
  }
}

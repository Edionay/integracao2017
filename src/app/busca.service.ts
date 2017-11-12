import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';


@Injectable()
export class BuscaService {

  constructor(private jsonp: Jsonp) { }
  search(palavra: string) {
    const search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', 'opensearch');
    search.set('format', 'json');

    return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
      .map(response => response.json().disciplina);
  }
}

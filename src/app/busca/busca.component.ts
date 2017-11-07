import { Component, OnInit } from '@angular/core';
import {BuscaService} from '../busca.service';
import 'rxjs/add/operator/map';
import { Subject} from 'rxjs/Subject';



@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent {
  results: Object;
  searchTerm$ = new Subject<string>();

  // constructor(private searchService: BuscaService) {
  //   this.searchService.search(this.searchTerm$)
  //     .subscribe(results => {
  //       this.results = results.results;
  //     });
  // }
}

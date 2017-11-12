import { Component, OnInit } from '@angular/core';
import { cursoES } from "../../assets/data/engenhariaDeSoftware";

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  es = cursoES;
  constructor() { }

  ngOnInit() {
  }
}


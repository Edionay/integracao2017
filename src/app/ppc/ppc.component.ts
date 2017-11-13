import { Component, OnInit } from '@angular/core';
import {Topico, topicosPpc} from '../../assets/data/engenhariaDeSoftware';


@Component({
  selector: 'app-ppc',
  templateUrl: './ppc.component.html',
  styleUrls: ['./ppc.component.css']
})
export class PpcComponent implements OnInit {

  topicos: Topico[] = topicosPpc;
  constructor() { }

  ngOnInit() {
  }
}


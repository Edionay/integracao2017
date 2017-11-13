import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './index.html',
  styleUrls: ['./css/style.css', './css/normalize.css', './css/icons.css']
})
@Component({
  selector: 'app-home-template',
  template: '<ul><li>1</li><li>2</li><li>3</li></ul>'
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

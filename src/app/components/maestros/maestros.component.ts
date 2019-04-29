import { Component, OnInit, Input } from '@angular/core';
import { Maestro } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.component.html',
  styleUrls: ['./maestros.component.scss'],
})
export class MaestrosComponent implements OnInit {

  @Input() maestros: Maestro[] = [];
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}

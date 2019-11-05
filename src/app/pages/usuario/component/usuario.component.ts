import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  personas: Array<any>;

  constructor(private _service: PersonasService) {
    this.personas = _service.retornaPersonas();
  }

  ngOnInit() {
  }

}

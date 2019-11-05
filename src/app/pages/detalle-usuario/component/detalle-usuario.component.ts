import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  persona: any;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _service: PersonasService) {
    this._route.params.subscribe(param => {
      this.persona = _service.retornaPersona(param['id']);
      if (this.persona == 404)
        this.goto404()
    });
  }

  ngOnInit() {
  }

  goto404() {
    this._router.navigate(['/404']);
  }

}

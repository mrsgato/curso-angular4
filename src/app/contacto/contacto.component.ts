import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo = "Página de contacto de la web"
    public parametro;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        this._route.params.forEach((params: Params)=>{
            this.parametro = params['page'];
            console.log(params);
        })
    }
    redirigir(){
        this._router.navigate(['/contacto','parametrotest'])
    }
    redirigirDos(){
        this._router.navigate(['/pagina-principal'])
    }
}
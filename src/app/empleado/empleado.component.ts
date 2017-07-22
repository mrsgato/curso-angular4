import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
    selector:'empleado-tag',
    templateUrl:'./empleado.component.html'
})

export class EmpleadoComponent{
    public titulo = "Componente empleado";
    public empleado:Empleado;
    ngOnInit(){
        this.empleado = new Empleado("yoni",45,"recolector",true);
        console.log(this.empleado);
    }
}
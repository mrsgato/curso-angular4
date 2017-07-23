import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
    selector:'empleado-tag',
    templateUrl:'./empleado.component.html'
})

export class EmpleadoComponent{
    public titulo = "Componente empleado";
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado("yoni",45,"recolector",true);
        this.trabajadores = [
            new Empleado('manolo manolete', 18,"corredor",false),
            new Empleado('machete', 25,"transportador",true),
            new Empleado('waripolo', 38,"vendedor",true)
        ]

        this.trabajador_externo = true;
        this.color = 'green';
        this.color_seleccionado = '#ccc';
    }

    

    ngOnInit(){
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}
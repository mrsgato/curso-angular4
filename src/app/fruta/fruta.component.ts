import {Component} from '@angular/core';

@Component({
    selector:'fruta',
    templateUrl:'fruta.component.html'
})

export class FrutaComponent{
    public nombre_componente = 'componente de fruta';
    public listado_fruta = 'manzana, naranja, banana';

    public nombre:string;
    public edad:number;
    public trabajos:Array<any> = ['webdeveloper','recolector de arandanos'];
    comodin:any;

    constructor(){
        this.nombre = "bernardo";
        this.edad = 26;
        this.comodin = "si";

    }

    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad(326);
        console.log("nombre: "+this.nombre+" edad: "+this.edad);

        var uno = 8;
        var dos = 15;

        if(uno === 8){
            let uno = 3;
            var dos = 88;
            console.log("DENTRO DEL IF: "+uno+" "+dos)
        }
        console.log("FUERA DEL IF: "+uno);
    }

    cambiarNombre(){
        this.nombre = "binchuca";
    }
    cambiarEdad(edad){
        this.edad = edad;
    }
}
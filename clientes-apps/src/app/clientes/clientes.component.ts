import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1, nombre: 'Juan', apellido:'Martin', email: 'jmartin@gmail.com', createAt: '26/09/2019' },
    {id: 2, nombre: 'Ana', apellido:'Calle', email: 'ac@yahoo.es', createAt: '20/10/2018' },
    {id: 3, nombre: 'Matias', apellido:'Montero', email: 'mmontero@hotmail.com', createAt: '26/09/2019' },
    {id: 4, nombre: 'Angelica', apellido:'Mancipe', email: 'amnacipe@gamil.com', createAt: '26/09/2019' },
    {id: 5, nombre: 'Jose', apellido:'Lozano', email: 'jelias@hotmail.com', createAt: '26/09/2019' }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { TablePrimeNgComponent } from '../shared/components/table-prime-ng/table-prime-ng.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-example-3',
  standalone: true,
  imports: [TablePrimeNgComponent, NgClass],
  templateUrl: './example-3.component.html',
})
export class Example3Component {
  columns = [
    { field: 'actions', header: 'Acc.' },
    { field: 'full_name', header: 'Nombre completo' },
    { field: 'email', header: 'Correo' },
    { field: 'status', header: 'Estatus' },
  ];
  rows = [
    {
      full_name: 'Sasha Martínez',
      email: 'sasha@email.com',
      status: 'Habilitado',
    },
    {
      full_name: 'Dayana González',
      email: 'empdayana@email.com',
      status: 'Habilitado',
    },
    {
      full_name: 'Dayana Herrera',
      email: 'TheGirl@email.com',
      status: 'Inhabilitado',
    },
    {
      full_name: 'Ramón Velázquez',
      email: 'ramon@email.com',
      status: 'Habilitado',
    },
    {
      full_name: 'Pablo Ortiz',
      email: 'emppablo@email.com',
      status: 'Habilitado',
    },
    {
      full_name: 'Daniel Pérez',
      email: 'daniel@email.com',
      status: 'Inhabilitado',
    },
    {
      full_name: 'Dana delgado',
      email: 'soydana@email.com',
      status: 'Habilitado',
    },
    {
      full_name: 'Adriana Herrera',
      email: 'estetica_adriana@email.com',
      status: 'Habilitado',
    },
    {
      full_name: 'Mario Vargas',
      email: 'devmario@email.com',
      status: 'Habilitado',
    },
    { full_name: 'Luis Ozio', email: 'luis@email.com', status: 'Inhabilitado' },
    {
      full_name: 'Genny Ferrer',
      email: 'genny@email.com',
      status: 'Habilitado',
    },
    {
      full_name: 'Marcos Iglesias',
      email: 'elmarcos@email.com',
      status: 'Inhabilitado',
    },
    {
      full_name: 'Edgar Herrera',
      email: 'codedgar@email.com',
      status: 'Habilitado',
    },
  ];
}

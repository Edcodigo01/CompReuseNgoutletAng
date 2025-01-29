import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table-prime-ng',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './table-prime-ng.component.html',
  styleUrl: './table-prime-ng.component.css',
})
export class TablePrimeNgComponent {
  @Input() columns!: any; // datos que compondran la cabecera de la tabla
  @Input() rows!: any; // datos que compondran la s filas de la tabla
  @Input() rowTemplate!: TemplateRef<any>; // plantilla que definira la forma del cuerpo de la tabla
}




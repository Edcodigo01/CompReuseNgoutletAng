import { Component } from '@angular/core';
import { TableSimpleComponent } from '../shared/components/table-simple/table-simple.component';

@Component({
  selector: 'app-example-2',
  standalone: true,
  imports: [TableSimpleComponent],
  templateUrl: './example-2.component.html',
})
export class Example2Component {}

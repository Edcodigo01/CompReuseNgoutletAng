import { Component } from '@angular/core';
import { TableSimpleComponent } from '../shared/components/table-simple/table-simple.component';

@Component({
  selector: 'app-example-1',
  standalone: true,
  imports: [TableSimpleComponent],
  templateUrl: './example-1.component.html',
})
export class Example1Component {}

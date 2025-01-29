import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table-simple',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './table-simple.component.html',
})
export class TableSimpleComponent {
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() bodyTemplate!: TemplateRef<any>;
}

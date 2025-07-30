import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-table',
  imports: [HeaderComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {}

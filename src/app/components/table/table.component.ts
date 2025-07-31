import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-table',
  imports: [HeaderComponent, PaginationComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  readonly tableData = Array.from({ length: 15 }, () => ({
    date: '10/09/24 18:16',
    id: '1388223',
    phone: '+ 7 777 777-77-77',
    transactionId: '25843594321',
    description: 'Пополнение баланса',
    amount: '5.00 ₽',
    user: 'Admin1',
    method: 'Нал.',
    account: 'Игровой',
    link: 'Link',
    extra: '--',
  }));
}

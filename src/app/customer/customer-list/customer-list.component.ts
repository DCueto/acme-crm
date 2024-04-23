import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'acme-customer-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  customers = [
    { id: 1, name: 'Xavi' },
    { id: 2, name: 'Dani' },
    { id: 3, name: 'Sara' },
    { id: 4, name: 'Chichi' },
    { id: 5, name: 'Laura' }
  ]
}

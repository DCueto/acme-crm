import { Component, OnInit, numberAttribute, Input } from '@angular/core';

@Component({
  selector: 'acme-customer-detail',
  standalone: true,
  imports: [],
  templateUrl: './customer-detail.component.html',
  styleUrl: './customer-detail.component.scss'
})

export class CustomerDetailComponent implements OnInit {

  @Input({transform: numberAttribute}) id = 0;

  ngOnInit(): void {
    console.log( this.id );
  }

}

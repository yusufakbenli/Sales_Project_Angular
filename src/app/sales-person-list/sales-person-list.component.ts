import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

salesPersonList: SalesPerson [] =[
  new SalesPerson("yusuf",'akbenli','gmail',50000),
  new SalesPerson('ali','akbenli','gmail',40000),
  new SalesPerson('yakup','akbenli','gmail',30000)
]



  constructor(){}

}

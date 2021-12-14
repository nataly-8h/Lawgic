import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core'

import { Subject } from 'rxjs';
import { ApexOptions } from 'ng-apexcharts';
// import { FinanceService } from 'app/modules/admin/dashboards/finance/finance.service';




@Component({
  selector: 'app-ver-datos',
  templateUrl: './ver-datos.component.html',
  styleUrls: ['./ver-datos.component.scss']
})
export class VerDatosComponent implements OnInit {

  @ViewChild('recentTransactionsTable', { read: MatSort }) recentTransactionsTableMatSort: MatSort;

  data: any;
  accountBalanceOptions: ApexOptions;
  recentTransactionsDataSource: MatTableDataSource<any> = new MatTableDataSource();
  recentTransactionsTableColumns: string[] = ['transactionId', 'name', 'date', 'amount', 'status'];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor() { 
    this.recentTransactionsDataSource.data.push({transactionId: 'ars.buapp@gmail.com', name: 'Abraham Ramírez', date: 'Propiedad intelectual', amount: "1102", status:'Pendiente'});
    this.recentTransactionsDataSource.data.push({transactionId: 'rolandocabrera.ccyasocc@gmsil.com', name: 'Rolando Cabrera', date: 'Propiedad Intelectual', amount: "2204", status:'Inscrito'});
    console.log(this.recentTransactionsDataSource.data)
  }

  ngOnInit(): void {

  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

}

import { DataService } from './../../data.service';
import { SubeFormularioComponent } from './../../sube-formulario/sube-formulario.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @ViewChild('recentTransactionsTable', { read: MatSort }) recentTransactionsTableMatSort: MatSort;
  // @ViewChild(SubeFormularioComponent) formChild;

  // message:string;


  ngAfterViewInit() {
    // this.product.productName = this.formChild; //<= This will set data
    // console.log(this.product);
    // this.data.currentMessage.subscribe(message => this.message = message)
  }

  product: any;

  // accountBalanceOptions: ApexOptions;
  recentTransactionsDataSource: MatTableDataSource<any> = new MatTableDataSource();
  recentTransactionsTableColumns: string[] = ['correo', 'nombre', 'curso', 'pagado', 'status'];
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  // constructor(private data: DataService) { }
  constructor() { }

  ngOnInit(): void {
    // this.product=this.formChild.suy;
    // if(this.formChild != null){
    // console.log("form child " + this.form);
    // }
    // console.log(this.prueba);
    // console.log(this.message);
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

}

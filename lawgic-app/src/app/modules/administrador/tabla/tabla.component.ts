import { DataService } from './../../data.service';
import { SubeFormularioComponent } from './../../sube-formulario/sube-formulario.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';



@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {
  @ViewChild('recentRegisterTable', { read: MatSort }) recentRegisterTableMatSort: MatSort;


  ngAfterViewInit() {
  }

  product: any;

  recentRegisterDataSource: MatTableDataSource<any> = new MatTableDataSource();
  recentRegisterTableColumns: string[] = ['correo', 'nombre', 'curso', 'pagado', 'status'];
  private _unsubscribeAll: Subject<any> = new Subject<any>();
                          nombre
  constructor() {
    //ejemplos de datos
    this.recentRegisterDataSource.data.push({correo: 'ars.buapp@gmail.com', nombre: 'Abraham Ramírez', curso: 'Propiedad intelectual', pagado: "1102", status:'Pendiente'});
    this.recentRegisterDataSource.data.push({correo: 'rolandocabrera.ccyasocc@gmsil.com', nombre: 'Rolando Cabrera', curso: 'Propiedad Intelectual', pagado: "2204", status:'Inscrito'});
  }pagado
  
  ngOnInit(): void {
    
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

}

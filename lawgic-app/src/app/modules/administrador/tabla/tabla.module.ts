import { SharedModule } from './../../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { TablaComponent } from 'app/modules/administrador/tabla/tabla.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { NgApexchartsModule } from 'ng-apexcharts';


const Routes: Route[] = [
  {
    path: '',
    component: TablaComponent
  }
];

@NgModule({
  declarations: [TablaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatSortModule,
    MatTableModule,
    NgApexchartsModule,
    SharedModule
  ]
})
export class TablaModule { }

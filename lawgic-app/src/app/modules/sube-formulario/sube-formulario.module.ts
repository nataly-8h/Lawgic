import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SubeFormularioComponent } from './sube-formulario.component';
// import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

const Routes: Route[] = [
  {
      path     : '',
      component: SubeFormularioComponent
  }
];


@NgModule({
  declarations: [
    SubeFormularioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    MatButtonModule,
    MatIconModule
  ]
})
export class SubeFormularioModule { }

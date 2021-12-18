import { GaleriaCursosComponent } from 'app/modules/administrador/galeria-cursos/galeria-cursos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';



const Routes: Route[] = [
  {
    path: '',
    component: GaleriaCursosComponent
  }
];

@NgModule({
  declarations: [GaleriaCursosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
  ]
})
export class GaleriaCursosModule { }

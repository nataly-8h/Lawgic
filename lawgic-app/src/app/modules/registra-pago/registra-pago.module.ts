import { MatMenuModule } from '@angular/material/menu';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'app/shared/shared.module';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseCardModule } from '@fuse/components/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { RegistraPagoComponent } from './registra-pago.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { Route, RouterModule } from '@angular/router';
// import {BrowserModule} from '@angular/platform-browser';
// import {MatNativeDateModule} from '@angular/material/core';
// import {MaterialExampleModule} from '../material.module';
// import { MatSelectModule } from '@angular/material/select';


//intento 2
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';




const Routes: Route[] = [
  {
      path     : '',
      component: RegistraPagoComponent
  }
];

@NgModule({
  declarations: [
    RegistraPagoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes),
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FuseCardModule,
    FuseAlertModule,
    SharedModule,
    //intento 1
    // BrowserAnimationsModule,
    // BrowserModule,
    // FormsModule,
    // HttpClientModule,
    // MatNativeDateModule,
    // MaterialExampleModule,
    // ReactiveFormsModule,
    // MatSelectModule,

    //intento de multi select 2
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSelectModule


  ],
  //intento del multi select 1 
  providers: [],
  bootstrap: [RegistraPagoComponent],
})
export class RegistraPagoModule { }

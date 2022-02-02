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
import { Route, RouterModule } from '@angular/router';


//intento 2
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { FacturaComponent } from './factura/factura.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const Routes: Route[] = [
  {
      path     : '',
      component: RegistraPagoComponent
  }
];

@NgModule({
  declarations: [
    RegistraPagoComponent,
    FacturaComponent
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

    //intento de multi select 2
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSelectModule,

    FormsModule

  ],
  //intento del multi select 1 
  providers: [],
  bootstrap: [RegistraPagoComponent],
})
export class RegistraPagoModule { }

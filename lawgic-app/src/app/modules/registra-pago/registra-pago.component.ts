import { ElementRef } from '@angular/core';
// import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import *  as  estado_data from './estados.json';

//wallet
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { Subject } from 'rxjs';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registra-pago',
  templateUrl: './registra-pago.component.html',
  styleUrls: ['./registra-pago.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistraPagoComponent implements OnInit {

  @ViewChild('f') pagoNgForm: NgForm;

  selected = '';
  selectedmun = '';

  requiereFacturaFlag = false;
  estados: any[] = new Array(32);
  municipios: any[] = new Array();

  requiereFactura() {
    this.requiereFacturaFlag = true;
  }
  norequiereFactura() {
    this.requiereFacturaFlag = false;
  }

  // let jsonCountries = JSON.stringify


  @ViewChild('btcChartComponent') btcChartComponent: ChartComponent;
  appConfig: any;
  btcOptions: ApexOptions = {};
  data: any;
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  watchlistChartOptions: ApexOptions = {};
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  alert: { type: FuseAlertType; message: string } = {
    type: 'success',
    message: ''
  };
  pagoForm: FormGroup;
  showAlert: boolean = false;

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {

    for (let i = 0; i < 32; i++) {
      this.estados[i] = estado_data[i];
    }

    // this.form = this._formBuilder.group({
    //   titular: [''],
    //   name: ['']
    // })

  }

  /**
     * On init
     */
  ngOnInit(): void {

    // console.log(this.estados[0]);


    // Create the form
    this.pagoForm = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }
    );
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  handleClick() {
    document.getElementById('upload-file').click();
    // console.log("dio click");
  }

  imagen_comprobante = "ninguno";
  addAttachment(fileInput: any) {
    const fileReaded = fileInput.target.files[0];
    this.imagen_comprobante = fileReaded.name;
    console.log(fileReaded.name);
  }



  // form: FormGroup;
  // registraPago() {
  //   console.log("Registrando pago...");
  //   // const registroPago: any = {
  //   //   nombre: this.form.get('Titular')?.value,
  //   //   name: this.form.get('name')?.value
  //   // }
  //   // console.log(registroPago);
  // }

  registraPago(form: NgForm) {
    console.log("on submit corriendo");
    if (form.valid) {
      console.log(form.value.nombre);
    }
    console.log(form.value);
    // this.pagoForm = new FormGroup(this.pagoNgForm.value);
    // console.log(this.pagoForm.value);
  }

  cambiaEstado(): void {
    let estnum: number;

    switch (this.selected) {
      case 'AGS': {
        estnum = 0;
        break;
      }
      case 'BC': {
        estnum = 1;
        break;
      }
      case 'BCS': {
        estnum = 2;
        break;
      }
      case 'CHI': {
        estnum = 3;
        break;
      }
      case 'CHS': {
        estnum = 4;
        break;
      }
      case 'CMP': {
        estnum = 5;
        break;
      }
      case 'CMX': {
        estnum = 6;
        break;
      }
      case 'COA': {
        estnum = 7;
        break;
      }
      case 'COL': {
        estnum = 8;
        break;
      }
      case 'DGO': {
        estnum = 9;
        break;
      }
      case 'GRO': {
        estnum = 10;
        break;
      }
      case 'GTO': {
        estnum = 11;
        break;
      }
      case 'HGO': {
        estnum = 12;
        break;
      }
      case 'JAL': {
        estnum = 13;
        break;
      }
      case 'MCH': {
        estnum = 14;
        break;
      }
      case 'MEX': {
        estnum = 15;
        break;
      }
      case 'MOR': {
        estnum = 16;
        break;
      }
      case 'NAY': {
        estnum = 17;
        break;
      }
      case 'NL': {
        estnum = 18;
        break;
      }
      case 'OAX': {
        estnum = 19;
        break;
      }
      case 'PUE': {
        estnum = 20;
        break;
      }
      case 'QR': {
        estnum = 21;
        break;
      }
      case 'QRO': {
        estnum = 22;
        break;
      }
      case 'SIN': {
        estnum = 23;
        break;
      }
      case 'SLP': {
        estnum = 24;
        break;
      }
      case 'SON': {
        estnum = 25;
        break;
      }
      case 'TAB': {
        estnum = 26;
        break;
      }
      case 'TLX': {
        estnum = 27;
        break;
      }
      case 'TMS': {
        estnum = 28;
        break;
      }
      case 'VER': {
        estnum = 29;
        break;
      }
      case 'YUC': {
        estnum = 30;
        break;
      }
      case 'ZAC': {
        estnum = 31;
        break;
      }

      default: {
        //statements; 
        break;
      }
    }

    // if(this.selected === 'AGS'){

    // }
    this.municipios = new Array(this.estados[estnum].muni.length);
    for (let i = 0; i < this.municipios.length; i++) {
      this.municipios[i] = this.estados[estnum].muni[i];
    }

  }

}

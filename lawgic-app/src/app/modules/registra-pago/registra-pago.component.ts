// import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import  *  as  estado_data  from  './estados.json';

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

  selected = 'option2';

  
  estados: any[] = new Array(32);

  

  // let jsonCountries = JSON.stringify

  @ViewChild('signUpNgForm') signUpNgForm: NgForm;

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
  signUpForm: FormGroup;
  showAlert: boolean = false;

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { 

    for(let i = 0; i < 32; i++){
      this.estados[i] = estado_data[i];
    }


  }

  /**
     * On init
     */
  ngOnInit(): void {

    console.log(this.estados[0]);


    // Create the form
    this.signUpForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      company: [''],
      agreements: ['', Validators.requiredTrue]
    }
    );
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Sign up
   */
  signUp(): void {
    // Do nothing if the form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    // Disable the form
    this.signUpForm.disable();

    // Hide the alert
    this.showAlert = false;

    // Sign up
    this._authService.signUp(this.signUpForm.value)
      .subscribe(
        (response) => {

          // Navigate to the confirmation required page
          this._router.navigateByUrl('/confirmation-required');
        },
        (response) => {

          // Re-enable the form
          this.signUpForm.enable();

          // Reset the form
          this.signUpNgForm.resetForm();

          // Set the alert
          this.alert = {
            type: 'error',
            message: 'Something went wrong, please try again.'
          };

          // Show the alert
          this.showAlert = true;
        }
      );
  }

}

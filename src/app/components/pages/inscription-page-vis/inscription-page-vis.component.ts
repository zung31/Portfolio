
import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {isEmpty, Observable} from 'rxjs';
import { NgClass, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
@Component({
  selector: 'app-inscription-page-vis',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgClass],
  templateUrl: './inscription-page-vis.component.html',
  styleUrl: './inscription-page-vis.component.scss'
})
export class InscriptionPageVisComponent {
  signUpForm: FormGroup = new FormGroup({});
  serverErrorMessage: string = '';
  submitted = false;
  

  constructor(
      
      private formBuilder: FormBuilder,
      @Inject(HttpClient) private http: HttpClient
  ) {
    
  }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      sexe: ['', Validators.required],
      firstName: ['', [Validators.required, this.notBlank(), Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]],
      lastName: ['', [Validators.required, this.notBlank(), Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', {validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      birthdate: ['', [Validators.required], this.notBlankAsync(), Validators.required,],
      profession: ['', [Validators.required, this.notBlank(), Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]],
      adresse: ['', [Validators.required, this.notBlank(), Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      zip: ['', [Validators.required], this.notBlankAsync(), Validators.required,],
      city: ['', [Validators.required], this.notBlankAsync(), Validators.required,],
      financerName: [''],
      financerContact: [''],
      financerPhone: [''],
      financerEmail: [''],
      niveau: ['', Validators.required]
    });
  }

  private notBlank(): ValidatorFn {
     return (control: AbstractControl): ValidationErrors | null => {
       return /^\s*$/.test(control.value) ? {blank: true} : null;
     };
  }

  notBlankAsync(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return new Promise(resolve => {
        setTimeout(() => {
          const isBlank = control.value == null || String(control.value).trim().length === 0;
          resolve(isBlank ? { 'notBlank': true } : null);
        }, 1000);
      });
    };
  }

  get sexe() {
    return this.signUpForm.get('sexe');
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get date() {
    return this.signUpForm.get('birthdate');
  }
  get profession() {
    return this.signUpForm.get('profession');
  }

  get adresse() {
    return this.signUpForm.get('adresse');
  }
  get zip() {
    return this.signUpForm.get('zip');
  }

  get city() {
    return this.signUpForm.get('acity');
  }
  get niveau() {
    return this.signUpForm.get('niveau');
  }
  errorMessageClass(control: AbstractControl | null): string {
    if (!control) {
      return 'not-visible';
    }
    return (this.submitted && control.invalid) || (control.invalid && (control.dirty || control.touched)) ? '' : 'not-visible';
  }

  

  private isFormValid(): boolean {
    for (const control of Object.keys(this.signUpForm.controls)) {
      if (this.signUpForm.controls[control].errors) {
        return false;
      }
    }
    return true;
  }

  // constructor(private fb: FormBuilder) {
  //   this.inscriptionFormEtranger = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     addresse: ['', Validators.required],
  //     birthDate: ['', Validators.required],
  //     zip: ['', Validators.required],
  //     job: ['', Validators.required],
  //     city: ['', Validators.required],
  //     mail: ['', [Validators.required, Validators.email]],
  //     tel: ['', Validators.required],
  //   });
  // }
  // errorMessageClass(control: AbstractControl) {
  //   return (this.submitted && control.invalid) || (control.invalid && (control.dirty || control.touched)) ? '' : 'not-visible';
  // }

  // onSubmit() {
  //   if (this.inscriptionFormEtranger.valid) {
  //     console.log(this.inscriptionFormEtranger.value);
  //   } else {
  //     console.log("Le formulaire n'est pas valide");
  //   }
  // }
  onSaveUser(){
    // debugger;
    const obj = this.signUpForm.value;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.authToken}`
    });
    // Change this URL to the good one (if u have one =)))\
    const linkVis = `${environment.apiLink}inscription/vis`;
    this.http.post(linkVis, obj, { headers: headers }).subscribe({
      next: (response) => {
        console.log('Form submitted successfully', response);
      },
      error: (error) => {
        console.error('Error submitting form', error);
      }
    });
  }

}
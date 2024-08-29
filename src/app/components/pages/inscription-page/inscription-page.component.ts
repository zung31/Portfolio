import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators, ReactiveFormsModule} from '@angular/forms';
import {isEmpty, Observable} from 'rxjs';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

interface Niveaux {
  value: string;
  viewValue: string;
}

@Injectable()
@Component({
  selector: 'app-inscription-page',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, NgClass, NgFor, NgIf],
  templateUrl: './inscription-page.component.html',
  styleUrl: './inscription-page.component.scss'
})
export class InscriptionPageComponent {
  signUpForm: FormGroup = new FormGroup({});
  niveaux: number[] =[];
  formations = [
    { name: 'Cours intensifs Marseille', niveaux: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] },
    { name: 'Cours intensifs Vacances Scolaires', niveaux: ['1', '2', '3', '4', '5', '6'] },
    { name: 'Cours hebdomadaires', niveaux: ['1 et 2', '3 et 4', '5 et 6'] },
    { name: 'Cours du soir', niveaux: ['1', '2', '3', '4', '5', '6'] }
  ];
  lieux = ['Nice', 'Marseille', 'URAPEDA SUD (Aix les Milles)', 'Toulon'];
  niveauxMarseille: string[] = [];
  niveauxVacances: string[] = [];
  niveauxHebdomadaires: string[] = [];
  niveauxSoir: string[] = [];
  selectedFormation: string = '';
  

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
      birthdate: ['', [Validators.required, this.notBlank(), Validators.required]],
      profession: ['', [Validators.required, this.notBlank(), Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]],
      adresse: ['', [Validators.required, this.notBlank(), Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      zip: ['', [Validators.required, this.notBlank(), Validators.required, Validators.pattern('^[0-9 ]*$')]],
      city: ['', [Validators.required, this.notBlank(), Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      sessionChoisie: [''],
      niveauIntensifMarseille: [''],
      niveauVacances: [''],
      lieuVacances: [''],
      niveauHebdomadaire: [''],
      lieuHebdomadaire: [''],
      niveauSoir: [''],
      lieuSoir: [''],
      financerName: [''],
      financerContact: [''],
      financerPhone: [''],
      financerEmail: [''],
      niveau: ['', Validators.required],
      formationSuivie: ['', Validators.required],
      connaissancesSujet: ['', Validators.required],
      formationPrecedente: ['', Validators.required],
      signesLSF: ['', Validators.required],
      attentes: ['', Validators.required],
      craintes: ['', Validators.required],
      connaissanceSourd: ['', Validators.required],
      formation: ['', Validators.required],
      niveauLSF: ['', Validators.required],
      niveauAcquis: ['', Validators.required],
      lieuFormation: ['', Validators.required],
      lieu: ['', Validators.required]
    });

  }
  niveauxx: Niveaux[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '1'},
    {value: '3', viewValue: '1'},
  ];
  onFormationChange() {
    const selectedFormation = this.signUpForm.get('formation')?.value;
    console.log('Selected Formation:', selectedFormation);
    this.selectedFormation = selectedFormation || '';

    const formation = this.formations.find(f => f.name === selectedFormation);

    if (formation) {
      switch (selectedFormation) {
        case 'Cours intensifs Marseille':
          this.niveauxMarseille = formation.niveaux;
          break;
        case 'Cours intensifs Vacances Scolaires':
          this.niveauxVacances = formation.niveaux;
          break;
        case 'Cours hebdomadaires':
          this.niveauxHebdomadaires = formation.niveaux;
          break;
        case 'Cours du soir':
          this.niveauxSoir = formation.niveaux;
          break;
        default:
          this.niveauxMarseille = [];
          this.niveauxVacances = [];
          this.niveauxHebdomadaires = [];
          this.niveauxSoir = [];
          break;
      }
    }
  }
 
  

  

  private notBlank(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return /^\s*$/.test(control.value) ? {blank: true} : null;
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
  get formationSuivie() {
    return this.signUpForm.get('formationSuivie');
  }
  get connaissancesSujet() {
    return this.signUpForm.get('connaissancesSujet');
  }
  get formationPrecedente() {
    return this.signUpForm.get('formationPrecedente');
  }
  get signesLSF() {
    return this.signUpForm.get('signesLSF');
  }
  get attentes() {
    return this.signUpForm.get('attentes');
  }
  get craintes() {
    return this.signUpForm.get('craintes');
  }
  get connaissanceSourd() {
    return this.signUpForm.get('connaissanceSourd');
  }
  get formation() {
    return this.signUpForm.get('formation');
  }
  get niveauLSF() { 
    return this.signUpForm.get('niveauLSF'); 
  }
  get niveauAcquis() {
     return this.signUpForm.get('niveauAcquis'); 
  }
  get lieuFormation() {
     return this.signUpForm.get('lieuFormation'); 
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
    // Change this URL to the good one (if u have one =)))
    const linkInscription = `${environment.apiLink}inscription`;
    this.http.post(linkInscription, obj, { headers: headers }).subscribe({
      next: (response) => {
        console.log('Form submitted successfully', response);
      },
      error: (error) => {
        console.error('Error submitting form', error);
      }
    });
  }

}



function errorMessageClass(control: any, arg1: number) {
  throw new Error('Function not implemented.');
}
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { catchError, finalize, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit{
  contactForm: FormGroup = new FormGroup({});
  serverErrorMessage: string = '';
  submitted = false;
  userMessage: string | null = null;
  messageType: 'success' | 'error' | null = null;

  constructor(
      
    private formBuilder: FormBuilder,
    @Inject(HttpClient) private http: HttpClient,
    private toastr: ToastrService 
) {
  
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, this.notBlank(), Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', {validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      phone: [''],
      sujet: ['', [Validators.required, this.notBlank(), Validators.required, Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9]*$')]],
      message: ['', [Validators.required, this.notBlank(), Validators.required, Validators.maxLength(500), Validators.pattern('^[a-zA-Z0-9 ]*$')]]
    });
  }
  
  private notBlank(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return /^\s*$/.test(control.value) ? {blank: true} : null;
    };
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get sujet() {
    return this.contactForm.get('sujet');
  }

  get message() {
    return this.contactForm.get('message');
  }

  errorMessageClass(control: AbstractControl | null): string {
    if (!control) {
      return 'not-visible';
    }
    return (this.submitted && control.invalid) || (control.invalid && (control.dirty || control.touched)) ? '' : 'not-visible';
  }

  private isFormValid(): boolean {
    for (const control of Object.keys(this.contactForm.controls)) {
      if (this.contactForm.controls[control].errors) {
        return false;
      }
    }
    return true;
  }

  onSaveUser(){
    // debugger;
    const obj = this.contactForm.value;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.authToken}`
    });
    const apiUrl = `${environment.apiLink}contact`;
    this.http.post(apiUrl, obj, { headers: headers }).subscribe({
      next: (response) => {
        if (response) {
          console.log('Form submitted successfully', response);
          this.showMessage('Message a été envoyé!', 'success');
          this.showSuccess('Message a été envoyé!', 'Succès');
        }
      },
      error: (error) => {
        console.error('Error submitting form', error);
        this.showMessage('Il y a un erreur survenu.', 'error');
        this.serverErrorMessage = error.message || 'Unknown error';
        this.showError('Il y a un erreur survenu.', 'Error');
      }
    });
  }

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }

  showError(message: string, title: string) {
    this.toastr.error(message, title);
  }

  showMessage(message: string, type: 'success' | 'error') {
    this.userMessage = message;
    this.messageType = type;
    setTimeout(() => {
      this.userMessage = null;
      this.messageType = null;
    }, 5000); 
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  options = ['Facebook', 'Instagram', 'Google', 'Friends', 'Other'];

  public registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),

  });

  constructor(private router: Router, private dataService: DataService) { }

  // getters
  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  ngOnInit(): void { }

  public register(): void {
    localStorage.setItem('Role', 'User');
    this.dataService.register(this.registerForm.value.email, this.registerForm.value.password).subscribe(
      result => {
        // Handle result
        console.log(result);
      },
      error => {
        console.log(error);
      },
      () => {
        this.router.navigate(['/login']);
      }
    );
  }

  getErrorMessage(component: string) {
    if (this.registerForm.get(component)?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.registerForm.get(component)?.hasError(component) ? 'Not a valid email' : '';
  }

}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),

  });

  constructor(private router: Router, private dataService: DataService) { }

  // getters
  get username(): AbstractControl {
    return this.loginForm.get('username')!;
  }

  get password(): AbstractControl {
    return this.loginForm.get('password')!;
  }

  ngOnInit(): void {
  }

  public login(): void {

    this.dataService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      result => {
        // Handle result
        console.log(result)
      },
      error => {
        console.log(error);
      },
      () => {
        this.dataService.changeUserData(this.loginForm.value);
        localStorage.setItem('Role', 'Vizitator');
        localStorage.setItem('Username', this.loginForm.value.username);
        this.router.navigate(['/profile']);

      }
    );

  }

  public goToRegister(): void {
    this.router.navigate(['/register']);
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  public subscription: Subscription | undefined;
  public loggedUser: any;
  public username: string = localStorage.getItem("Username")!;

  public profileForm: FormGroup = new FormGroup({
    password: new FormControl(''),
  });

  constructor(private router: Router, private dataService: DataService) { }

  // getters
  get password(): AbstractControl {
    return this.profileForm.get('password')!;
  }

  ngOnInit(): void {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
  }

  ngOnDestroy(): void {
    //this.subscription?.unsubscribe();
  }

  public logout(): void {
    localStorage.setItem('Role', 'Anonymous');
    localStorage.setItem('Username', '');
    this.router.navigate(['/home']);
  }
  public change(): void {

  }

}

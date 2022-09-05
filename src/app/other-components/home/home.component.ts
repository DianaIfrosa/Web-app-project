import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];


  constructor(
    private router: Router,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(
      (result) => {
        console.log(result);
        this.categories = result;
      },
      (error) => { console.log(error); }
    );
  }

  public goToAuth() {
    if (localStorage.getItem('Role') != null) {
      this.router.navigate(['/dashboard']);
      return;
    }

    this.router.navigate(['/login']);
  }

}

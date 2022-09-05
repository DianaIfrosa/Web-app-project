import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public http: HttpClient) { }

  public getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>('https://localhost:44355/api/Categories/GetCategorySelect');
  }
}

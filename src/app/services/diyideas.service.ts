import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DIYIdea } from '../interfaces/diyidea';

@Injectable({
  providedIn: 'root'
})
export class DiyideasService {

  constructor(public http: HttpClient) { }

  public getPopularIdeas(): Observable<DIYIdea[]>{
    return this.http.get<DIYIdea[]>('https://localhost:44355/api/DIYIdeas/ShowIdeas');
  }
  public getIdeas(): Observable<DIYIdea[]>{
    return this.http.get<DIYIdea[]>('https://localhost:44355/api/DIYIdeas/ShowIdeas');
  }
  public getIdeaByID(id: number):Observable<any>{
    return this.http.get<DIYIdea>(`https://localhost:44355/api/DIYIdeas/ideas/${id}`)
  }
}

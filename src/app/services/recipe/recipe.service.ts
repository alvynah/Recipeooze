import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../../interface/recipe.model'

const baseUrl = 'http://127.0.0.1:8000/api/recipes/';
const addurl = 'http://127.0.0.1:8000/api/recipe/post/';
const updateurl = 'http://127.0.0.1:8000/api/recipe/update/';
const geturl = 'http://127.0.0.1:8000/api/recipe/get/';
const deleteurl = 'http://127.0.0.1:8000/api/recipe/delete';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(baseUrl);
  }
  get(id: any): Observable<Recipe> {
    return this.http.get(`${geturl}${id}/`);
  }
  create(data: any) {
    return this.http.post(addurl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${updateurl}${id}/`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${deleteurl}${id}`);
  }

}


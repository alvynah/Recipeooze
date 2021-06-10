import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../interface/category.model'

const baseUrl = 'http://127.0.0.1:8000/api/categories/';
const addurl = 'http://127.0.0.1:8000/api/category/post/';
const updateurl = 'http://127.0.0.1:8000/api/category/update/';
const geturl = 'http://127.0.0.1:8000/api/category/get/';
const deleteurl = 'http://127.0.0.1:8000/api/category/delete';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(baseUrl);
  }
  get(id: any): Observable<Category> {
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


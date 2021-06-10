import { Component, OnInit } from '@angular/core';
import {Category} from '../../interface/category.model';
import {CategoryService} from '../../services/category/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category?: Category[];
  currentPost?: Category;
  currentIndex = -1;
  title = '';

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.retrievePosts();
  }
  retrievePosts(): void {
    this.categoryService.getAll()
      .subscribe(
        data => {
          this.category = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrievePosts();
    this.currentPost = undefined;
    this.currentIndex = -1;
  }

  setActivePost(posts: Category, index: number): void {
    this.currentPost = posts;
    this.currentIndex = index;
  }

}


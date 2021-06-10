import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../interface/recipe.model';
import { RecipeService } from '../../services/recipe/recipe.service'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipes?: Recipe[];
  currentPost?: Recipe;
  currentIndex = -1;
  title = '';

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.retrievePosts();
  }
  retrievePosts(): void {
    this.recipeService.getAll()
      .subscribe(
        data => {
          this.recipes = data;
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

  setActivePost(posts: Recipe, index: number): void {
    this.currentPost = posts;
    this.currentIndex = index;
  }

}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {CategoryComponent} from './components/category/category.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RecipeComponent} from './components/recipe/recipe.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: "/login", pathMatch: "full" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

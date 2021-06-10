import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeAddComponent } from './components/recipe-add/recipe-add.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    CategoryComponent,
    RecipeComponent,
    ProfileComponent,
    RecipeDetailsComponent,
    RecipeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/registration/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input: any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.input = {
      username: '',
      email: '',
      password: '',
    }
  }

  loginUser() {
    this.loginService.loginUser(this.input).subscribe(
      response => {
        console.log(response)
        alert(this.input.username + ' logged in successfully')
      },
      error => {
        console.log('error', error)
        alert('Username or password is incorrect')
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { CreateuserService} from '../../services/registration/createuser.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  input: any;


  constructor(private createUserService: CreateuserService) { }

  ngOnInit(): void {
    this.input = {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  }

  registerUser() {
    this.createUserService.registerUser(this.input).subscribe(
      response => {
        alert('User' + " " + this.input.username + ' has been created')
      },
      error => console.log('error', error)
    );
  }

}


import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupData = {
    username: '',
    email: '',
    password: '',
    age: 0,
    roles: ['ROLE_USER']
  };

  responseMessage: string | undefined;

  constructor(private http: HttpClient
    , private router: Router
  ) { }

  onSubmit() {
    this.http.post('http://localhost:8082/api/auth/signup', this.signupData)
      .subscribe(
        response => {
          this.responseMessage = 'User registered successfully!';
          this.router.navigate(['/']);
        },
        error => this.responseMessage = 'Signup failed.'
      );
  }
}
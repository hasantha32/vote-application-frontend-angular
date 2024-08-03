import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule]
})
export class SignInComponent {

  signInData = {
    username: '',
    password: ''
  };

  responseMessage: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  async onSubmit() {
    try {
      const response: any = await this.http.post('http://localhost:8082/api/auth/signin', this.signInData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).toPromise();

      if (response && response.accessToken) {
        localStorage.setItem('token', response.accessToken); // Store the JWT token
        this.responseMessage = 'Sign in successful!';
        this.router.navigate(['menu']); // Redirect to the menu page
      } else {
        this.responseMessage = 'Sign in failed.';
      }
    } catch (error: any) {
      this.responseMessage = error.error.message || 'Sign in failed.';
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
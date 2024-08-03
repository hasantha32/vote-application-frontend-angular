import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote-profile',
  templateUrl: './vote-profile.component.html',
  styleUrls: ['./vote-profile.component.css'],
  standalone: true,
  imports: [FormsModule, HttpClientModule]
})
export class VoteProfileComponent {

  profileId: string = '';

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  async onSubmit() {
    try {
      const response = await this.http.post(`http://localhost:8082/api/vote/cast?profileId=${this.profileId}`, {}, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token') // Assumes token is stored in local storage
        }
      }).toPromise();

      if (response) {
        alert('Voted successfully!');
        this.router.navigate(['/menu']);
      } else {
        alert('Failed to cast vote.');
      }
    } catch (error) {
      alert('Failed to cast vote. Myabe voted before.');
    }
  }
}

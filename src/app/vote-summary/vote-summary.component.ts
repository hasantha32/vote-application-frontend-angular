import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vote-summary',
  templateUrl: './vote-summary.component.html',
  styleUrls: ['./vote-summary.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule]
})
export class VoteSummaryComponent {

  profileId: string = '';
  votes: any[] = [];
  responseMessage: string | undefined;

  constructor(private http: HttpClient) { }

  async onSubmit() {
    try {
      const response = await this.http.get<any[]>(`http://localhost:8082/api/vote/summary/${this.profileId}`, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token') // Assumes token is stored in local storage
        }
      }).toPromise();

      if (response && response.length > 0) {
        this.votes = response;
        this.responseMessage = `${response.length} Votes Received.`;
      } else {
        this.responseMessage = 'No votes found for this profile.';
      }
    } catch (error: any) {
      this.responseMessage = error.error.message || 'Failed to retrieve vote summary.';
    }
  }
}

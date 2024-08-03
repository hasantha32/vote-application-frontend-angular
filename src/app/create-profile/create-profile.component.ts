import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule]
})
export class CreateProfileComponent {

  profileData = {
    name: '',
    age: null,
    description: '',
    imageBase64: ''
  };

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.profileData.imageBase64 = reader.result as string;
      };
    }
  }

  async onSubmit() {
    try {
      const response = await this.http.post('http://localhost:8082/api/profile/create', this.profileData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token') // Assumes token is stored in local storage
        }
      }).toPromise();

      if (response) {
        alert('Profile created successfully!');
        this.router.navigate(['/menu']);
      } else {
        alert('Failed to create profile.');
      }
    } catch (error: any) {
      alert(error.error.message || 'Failed to create profile.');
    }
  }
}
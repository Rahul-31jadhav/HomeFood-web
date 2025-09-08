import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
   currentForm: 'login' | 'signup' | 'forgot' = 'login'; // default is login

  showPassword: boolean = false;

  showLogin() {
    this.currentForm = 'login';
  }

  showSignup() {
    this.currentForm = 'signup';
  }

  showForgot() {
    this.currentForm = 'forgot';
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}

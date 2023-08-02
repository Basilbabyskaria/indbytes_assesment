import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private ds: ServicesService,
    private fb: FormBuilder
  ) {}
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('[0-9@a-zA-Z]*')]],
  });
  ngOnInit(): void {}

  login = () => {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;
    if (this.loginForm.valid) {
      this.ds.login(email,password)
      
    }
  };
}

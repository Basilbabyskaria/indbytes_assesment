import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
let user = {
  email: 'basil@123',
  password: 'basil@123',
};
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private router: Router) {}

  login(email: any, password: any) {
    if (email === user.email && password === user.password) {
      this.router.navigateByUrl('home');
    }
    else{
      alert("Incorrect details entered")
    }
  }
}

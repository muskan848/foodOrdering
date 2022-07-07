import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })

  }

  submit() {
    this.http.get<any>("http://localhost:3000/signup").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      })
      if (user) {
        this.loginForm.reset();
        this.router.navigate(['home'])
      }
      else {
        alert("User not found!");
      }
    }, err => {
      alert("Something went wrong!");
    })
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }



}

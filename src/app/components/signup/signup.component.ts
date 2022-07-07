import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      phone: [''],
      email: [''],
      password: ['']
    });

    this.signupForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  submit() {
    this.http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res => {
      alert('Registration Successfull!');
      this.signupForm.reset();
      this.router.navigate([''])
    }, err => {
      alert("Something went wrong");
    }
    )
  }

  get firstname() {
    return this.signupForm.get('firstname');
  }
  get lastname() {
    return this.signupForm.get('lastname');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get phone() {
    return this.signupForm.get('phone');
  }
  get password() {
    return this.signupForm.get('password');
  }


}

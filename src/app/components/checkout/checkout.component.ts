import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../shared/cart';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  display = 'none';
  display1 = 'none';
  offer: boolean = false;
  isShown: boolean = true;
  billingForm !: FormGroup;
  payForm !: FormGroup;

  view: string = 'disabled'

  cart!: Cart
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();

    this.billingForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
      address: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      state: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      zip: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),


    })

    this.payForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
      expire: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      cvv: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{3}")]),
      credit: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{16}")]),
    })

  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  openModal1() {
    this.display1 = "block";
    this.billingForm.reset();
    this.payForm.reset();

  }
  onCloseHandled1() {
    this.display1 = "none";
  }


  toggleShow() {

    this.isShown = !this.isShown;

  }

  code(val: any) {
    if (val == 'EXAMPLECODE') {
      this.offer = true;
      this.openModal();
    }
    else {
      this.offer = false;
    }
  }
  submit() {
    console.log(this.billingForm.value);
  }


  get firstname() {
    return this.billingForm.get('firstname');
  }

  get lastname() {
    return this.billingForm.get('lastname');
  }
  get email() {
    return this.billingForm.get('email');
  }
  get phone() {
    return this.billingForm.get('phone');
  }
  get address() {
    return this.billingForm.get('address');
  }

  get country() {
    return this.billingForm.get('country');
  } get state() {
    return this.billingForm.get('state');
  } get zip() {
    return this.billingForm.get('zip');
  }

  get cvv() {
    return this.payForm.get('cvv');

  }
  get expire() {
    return this.payForm.get('expire');

  } get credit() {
    return this.payForm.get('credit');

  } get name() {
    return this.payForm.get('name');

  }




}

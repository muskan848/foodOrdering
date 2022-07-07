import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service'
import { Food } from '../../shared/food'
import { ActivatedRoute, Router } from '@angular/router'
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})

export class FoodPageComponent implements OnInit {

  food !: Food
  constructor(private foodService: FoodService, private route: ActivatedRoute, private cartService: CartService, private router: Router) {

    this.route.params.subscribe((params) => {
      if (params['id'])
        this.food = this.foodService.getFoodById(params['id'])
    })

  }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
  addToCart1() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/home');

  }
  favFun() {
    if (this.food.fav == true) {
      this.food.fav = false;
    }
    else {
      this.food.fav = true;
    }
  }

}

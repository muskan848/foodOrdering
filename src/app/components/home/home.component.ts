import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service'
import { Food } from '../../shared/food'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodItems: Food[] = [];
  starRating = 0;

  constructor(private foodService: FoodService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      if (params['searchItem']) {
        this.foodItems = this.foodService.getFood().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
      }
      else if (params['tag']) {
        this.foodItems = this.foodService.getFoodByTag(params['tag']);
      }
      else {
        this.foodItems = this.foodService.getFood();
      }

    })



  }

}

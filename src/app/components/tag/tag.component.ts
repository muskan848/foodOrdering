import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../../shared/tag';
import { FoodService } from '../../services/food.service'

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  @Input()
  foodPageTags?: string[];
  tag?: Tag[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    if (!this.foodPageTags)
      this.tag = this.foodService.getAllTags();
  }

}

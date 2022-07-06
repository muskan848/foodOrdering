import { Injectable } from '@angular/core';
import { Food } from '../shared/food'
import { Tag } from '../shared/tag'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFavorites(): Food {
    return this.getFood().find(food => food.fav == true)!;
  }

  getFoodById(id: number): Food {
    return this.getFood().find(food => food.id == id)!;
  }

  getFoodByTag(tag: string): Food[] {
    return tag == 'All' ? this.getFood() : this.getFood().filter(food => food.tags?.includes(tag));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 26 },
      { name: 'FastFood', count: 16 },
      { name: 'Pizza', count: 5 },
      { name: 'Lunch', count: 5 },
      { name: 'Soup', count: 2 },
      { name: 'Burger', count: 3 },
      { name: 'Breakfast', count: 3 },
      { name: 'Dinner', count: 2 },
      { name: 'Snacks', count: 10 },
      { name: 'Veg', count: 18 },
      { name: 'Non-veg', count: 7 }
    ]
  }

  getFood(): Food[] {
    return [
      {
        id: 1,
        name: 'Vegetable Burger',
        cookTime: '15-20 mins',
        price: 80,
        fav: false,
        origins: ['indian'],
        star: 3,
        imageUrl: '/assets/img1.webp',
        tags: ['FastFood', 'Burger', 'Lunch', 'Veg']
      },
      {
        id: 2,
        name: 'Pizza',
        cookTime: '25-30 mins',
        price: 150,
        fav: true,
        origins: ['chinese'],
        star: 5,
        imageUrl: '/assets/img2.jpg',
        tags: ['FastFood', 'Pizza', 'Cheese', 'Lunch', 'Veg']
      },
      {
        id: 3,
        name: 'Noodles',
        cookTime: '20-25 mins',
        price: 120,
        fav: false,
        origins: ['indian'],
        star: 3,
        imageUrl: '/assets/img3.jpeg',
        tags: ['FastFood', 'Noodles', 'Lunch', 'Veg']
      },
      {
        id: 4,
        name: 'Fried Rice',
        cookTime: '20-25 mins',
        price: 50,
        fav: false,
        origins: ['indian'],
        star: 3,
        imageUrl: '/assets/img4.jpg',
        tags: ['FriedRice', 'Lunch', 'Dinner', 'Veg']
      },
      {
        id: 5,
        name: 'Cheese Balls',
        cookTime: '15-20 mins',
        price: 60,
        fav: false,
        origins: ['italy'],
        star: 4,
        imageUrl: '/assets/img5.jpg',
        tags: ['FastFood', 'CheeseBalls', 'Snacks', 'Veg']
      },
      {
        id: 6,
        name: 'Chicken Rolls',
        cookTime: '20-25 mins',
        price: 200,
        fav: false,
        origins: ['chinese'],
        star: 4,
        imageUrl: '/assets/img6.jpg',
        tags: ['FastFood', 'ChickenRoll', 'Dinner', 'Non-veg']
      },
      {
        id: 7,
        name: 'Aloo Tikki',
        cookTime: '10-15 mins',
        price: 25,
        fav: false,
        origins: ['indian'],
        star: 2,
        imageUrl: '/assets/img7.jpg',
        tags: ['Indian', 'AlooTikki', 'Snacks', 'Veg']
      },
      {
        id: 8,
        name: 'Spring Roll',
        cookTime: '20-25 mins',
        price: 90,
        fav: false,
        origins: ['indian'],
        star: 3,
        imageUrl: '/assets/img8.webp',
        tags: ['Indian', 'SpringRoll', 'Snacks', 'Veg']
      },
      {
        id: 9,
        name: 'Paneer Tikka',
        cookTime: '20-25 mins',
        price: 100,
        fav: false,
        origins: ['indian'],
        star: 4,
        imageUrl: '/assets/img9.jpg',
        tags: ['Indian', 'PaneerTikka', 'Snacks', 'Veg']
      },
      {
        id: 10,
        name: 'White Sauce Pasta',
        cookTime: '20-25 mins',
        price: 140,
        fav: false,
        origins: ['italy'],
        star: 5,
        imageUrl: '/assets/img10.jpg',
        tags: ['FastFood', 'Pasta', 'Snacks', 'Veg']
      },
      {
        id: 11,
        name: 'Red Sauce Pasta',
        cookTime: '20-25 mins',
        price: 140,
        fav: false,
        origins: ['italy'],
        star: 2,
        imageUrl: '/assets/img11.jpg',
        tags: ['FastFood', 'Pasta', 'Snacks', 'Veg']
      },
      {
        id: 12,
        name: 'Schezwan Noodles',
        cookTime: '20-25 mins',
        price: 180,
        fav: false,
        origins: ['chinese'],
        star: 5,
        imageUrl: '/assets/img12.jpg',
        tags: ['FastFood', 'Noodles', 'Lunch', 'Veg']
      },
      {
        id: 13,
        name: 'Fried Eggs',
        cookTime: '15-20 mins',
        price: 80,
        fav: false,
        origins: ['indian'],
        star: 1,
        imageUrl: '/assets/img13.webp',
        tags: ['Eggs', 'Breakfast', 'Non-veg']
      },
      {
        id: 14,
        name: 'Pasta',
        cookTime: '20-25 mins',
        price: 180,
        fav: false,
        origins: ['italy'],
        star: 4,
        imageUrl: '/assets/img14.jpg',
        tags: ['FastFood', 'Pasta', 'Snacks', 'Veg']
      },
      {
        id: 15,
        name: 'Momos',
        cookTime: '20-25 mins',
        price: 180,
        fav: false,
        origins: ['chinese'],
        star: 3,
        imageUrl: '/assets/img15.jpg',
        tags: ['FastFood', 'Momos', 'Snacks', 'Veg']
      },
      {
        id: 16,
        name: 'Tandoori Paneer Pizza',
        cookTime: '25-35 mins',
        price: 250,
        fav: true,
        origins: ['Italian'],
        star: 5,
        imageUrl: '/assets/img16.jpg',
        tags: ['FastFood', 'Pizza', 'Veg']
      },
      {
        id: 17,
        name: 'Vegetable Pizza',
        cookTime: '25-35 mins',
        price: 200,
        fav: false,
        origins: ['Italian'],
        star: 4,
        imageUrl: '/assets/img17.webp',
        tags: ['FastFood', 'Pizza', 'Veg']
      },
      {
        id: 18,
        name: 'Sweet-Corn Pizza',
        cookTime: '20-25 mins',
        price: 190,
        fav: true,
        origins: ['Italian'],
        star: 4,
        imageUrl: '/assets/img18.avif',
        tags: ['FastFood', 'Pizza', 'Veg']
      },
      {
        id: 19,
        name: 'Pasta Pizza',
        cookTime: '25-35 mins',
        price: 250,
        fav: true,
        origins: ['Italian'],
        star: 5,
        imageUrl: '/assets/img19.jpg',
        tags: ['FastFood', 'Pizza', 'Veg']
      },
      {
        id: 20,
        name: 'Chicken Burger',
        cookTime: '15-20 mins',
        price: 90,
        fav: true,
        origins: ['Italian'],
        star: 5,
        imageUrl: '/assets/img20.jpg',
        tags: ['FastFood', 'Burger', 'Non-veg']
      },
      {
        id: 21,
        name: 'Loaded Vegie Burger',
        cookTime: '15-20 mins',
        price: 120,
        fav: true,
        origins: ['Italian'],
        star: 5,
        imageUrl: '/assets/img21.jpg',
        tags: ['FastFood', 'Burger', 'Veg']
      },
      {
        id: 22,
        name: 'Mix Veg Soup',
        cookTime: '15-20 mins',
        price: 50,
        fav: false,
        origins: ['Indian'],
        star: 4,
        imageUrl: '/assets/img23.jpg',
        tags: ['Soup', 'Breakfast', 'Veg']
      },
      {
        id: 23,
        name: 'Aloo Prantha',
        cookTime: '20-25 mins',
        price: 80,
        fav: true,
        origins: ['Indian'],
        star: 5,
        imageUrl: '/assets/img22.jpg',
        tags: ['Breakfast', 'Prantha', 'Veg']
      },
      {
        id: 24,
        name: 'Chicken Soup',
        cookTime: '20-25 mins',
        price: 120,
        fav: true,
        origins: ['Indian'],
        star: 5,
        imageUrl: '/assets/img24.jpg',
        tags: ['Breakfast', 'Soup', 'Non-veg']
      },
      {
        id: 25,
        name: 'Nuggets',
        cookTime: '20-25 mins',
        price: 120,
        fav: true,
        origins: ['Indian'],
        star: 5,
        imageUrl: '/assets/img25.jpg',
        tags: ['Snacks', 'Nuggets', 'Veg']
      }, {
        id: 25,
        name: 'French Fries',
        cookTime: '20-25 mins',
        price: 100,
        fav: true,
        origins: ['Indian'],
        star: 5,
        imageUrl: '/assets/img26.webp',
        tags: ['Snacks', 'Fries', 'Veg']
      },

    ]
  }
}

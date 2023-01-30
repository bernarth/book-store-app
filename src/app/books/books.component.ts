import { Component } from '@angular/core';

// It's good to define the type so interfaces helps with that.
interface Book {
  name: string;
  author: string;
  image: string;
  amount: number;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'clean code',
      author: 'roberth c martin',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
      amount: 700
    },
    {
      name: 'the pragmatic programmer',
      author: 'david thomas',
      image: 'https://m.media-amazon.com/images/I/51IA4hT6jrL._SX380_BO1,204,203,200_.jpg',
      amount: 800
    },
    {
      name: 'art of computer programming',
      author: 'donald knuth',
      image: 'https://m.media-amazon.com/images/I/41YakMLJktL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      amount: 18300
    },
    {
      name: 'introduction to algorithms',
      author: 'thomas cormen',
      image: 'https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX440_BO1,204,203,200_.jpg',
      amount: 800
    }
  ];
  
  isShowing: boolean = true;

  constructor() {}

  toggleBooks(): void {
    this.isShowing = !this.isShowing;
  }
}

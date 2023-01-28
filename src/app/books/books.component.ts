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
    }
  ];
  
  isShowing: boolean = true;

  constructor() {}

  toggleBooks(): void {
    this.isShowing = !this.isShowing;
  }
}

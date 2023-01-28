import { Component } from '@angular/core';

// It's good to define the type so interfaces helps with that.
interface Book {
  name: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Roberth C Martin',
      image: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg'
    },
    {
      name: 'The Pragmatic Programmer',
      author: 'David Thomas',
      image: 'https://m.media-amazon.com/images/I/51IA4hT6jrL._SX380_BO1,204,203,200_.jpg'
    }
  ];
  
  isShowing: boolean = true;

  constructor() {}

  toggleBooks(): void {
    this.isShowing = !this.isShowing;
  }
}

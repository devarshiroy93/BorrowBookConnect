import { Component, inject } from '@angular/core';
import { CardComponent } from '@devarshiroy93/easylib';
import { BooksServiceService } from './books-service.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [CardComponent , AsyncPipe],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent  {

  books$: Observable<any[]> = of([]);

  bookService: BooksServiceService = inject(BooksServiceService);

  getBooks() {
    this.books$ = this.bookService.getBooks();
  }

  ngOnInit(){
    this.getBooks()
  }
}

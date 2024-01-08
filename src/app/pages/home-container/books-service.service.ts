import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  private http$  = inject(HttpClient);

  getBooks() : Observable<any[]>{
    return this.http$.get<any[]>('../../../assets/mock/books.json');
  }
  
}

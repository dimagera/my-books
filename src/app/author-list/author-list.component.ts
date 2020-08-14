import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/shared/author.service';
import { IAuthor } from '../shared/iauthor';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  authors: IAuthor[];

  constructor(public myservice: AuthorService) { }

  ngOnInit(): void {
    this.authors = Array.from(this.myservice.getAuthors())
  }

  deleteAuthor(id: number) {
    if (confirm("подверждаете ли Вы удаление?")) {
      this.myservice.deleteAuthor(+id);
      this.authors = this.myservice.getAuthors()
    }
  }
}

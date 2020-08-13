import { Injectable } from '@angular/core';
import { IAuthor } from './iauthor';
import { IBook } from './ibook';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private FAKE_AUTHORS: IAuthor[] = [
    {
      id: 1,
      firstName: "Тарас",
      lastName: "Шевченко",
      birthdate: new Date(1814, 3, 9),
      books: [
        {name: 'kobzar', numberOfPages: 600, genre: 'роман'},
        {name: 'стихи', numberOfPages: 200, genre: 'поема'}
      ]
    },
    {
      id: 2,
      firstName: "Тарас",
      lastName: "Шевченко",
      birthdate: new Date(1814, 3, 9),
      books: [
        {name: 'kobzar', numberOfPages: 600, genre: 'роман'},
        {name: 'стихи', numberOfPages: 200, genre: 'поема'}
      ]
    },
    {
      id: 66,
      firstName: "Тарас",
      lastName: "Шевченко",
      birthdate: new Date(1814, 3, 9),
      books: [
        {name: 'kobzar', numberOfPages: 600, genre: 'роман'},
        {name: 'стихи', numberOfPages: 200, genre: 'поема'}
      ]
    },
    {
      id: 20,
      firstName: "Тарас",
      lastName: "Шевченко",
      birthdate: new Date(1814, 3, 9),
      books: [
        {name: 'kobzar', numberOfPages: 600, genre: 'роман'},
        {name: 'стихи', numberOfPages: 200, genre: 'поема'}
      ]
    },
    {
      id: 100,
      firstName: "Тарас",
      lastName: "Шевченко",
      birthdate: new Date(1814, 3, 9),
      books: [
        {name: 'kobzar', numberOfPages: 600, genre: 'роман'},
        {name: 'стихи', numberOfPages: 200, genre: 'поема'}
      ]
    }
  ];

  // private FAKE_BOOKS: IBook[] = [
  //   {name: 'kobzar', numberOfPages: 600, genre: 'роман'},
  //   {name: 'ааа', numberOfPages: 300, genre: 'роман'},
  //   {name: 'ббб', numberOfPages: 400, genre: 'детектив'},
  //   {name: 'koвввbzar', numberOfPages: 500, genre: 'ужасы'},
  // ]

  constructor() { }

  getAuthors(): IAuthor[] {
    return this.FAKE_AUTHORS; 
  };

  deleteAuthor(id: number){
    let authorIndex;

    this.FAKE_AUTHORS.find((element,index)=>{
      if(element.id === id) {
        authorIndex = index;
        return true;
      }
    })

    this.FAKE_AUTHORS.splice(authorIndex, 1);
  }

  // getBooks(): IBook[] {
  //   return this.FAKE_BOOKS;
  // };
}

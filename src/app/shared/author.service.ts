import { Injectable } from '@angular/core';
import { IAuthor } from './iauthor';
import { IBook } from './ibook';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private FAKE_BOOKS: IBook[] = [
    { id: 1, name: 'kobzar', numberOfPages: 600, genre: 'ужасы' },
    { id: 2, name: 'стихи', numberOfPages: 200, genre: 'поема' },
    { id: 3, name: 'kobzar', numberOfPages: 600, genre: 'роман' },
    { id: 4, name: 'стихи', numberOfPages: 200, genre: 'поема' },
    { id: 5, name: 'kobzar', numberOfPages: 600, genre: 'роман' },
    { id: 6, name: 'стихи', numberOfPages: 200, genre: 'поема' },
    { id: 7, name: 'kobzar', numberOfPages: 600, genre: 'роман' },
    { id: 8, name: 'стихи', numberOfPages: 200, genre: 'поема' },
    { id: 9, name: 'kobzar', numberOfPages: 600, genre: 'роман' },
    { id: 10, name: 'стихи', numberOfPages: 200, genre: 'поема' },
  ];

  public FAKE_AUTHORS: IAuthor[] = [
    {
      id: 1,
      firstName: "Тарас",
      lastName: "Шевченко",
      parentName: "Иванович",
      birthdate: new Date(1814, 2, 9),
      books: [
        this.FAKE_BOOKS[0],
        this.FAKE_BOOKS[1],
      ]
    },
    {
      id: 2,
      firstName: "Тарас",
      lastName: "Шевченко",
      parentName: "Иванович",
      birthdate: new Date(1814, 2, 9),
      books: [
        this.FAKE_BOOKS[2],
        this.FAKE_BOOKS[3],
      ]
    },
    {
      id: 66,
      firstName: "Тарас",
      lastName: "Шевченко",
      parentName: "Иванович",
      birthdate: new Date(1814, 2, 9),
      books: [
        this.FAKE_BOOKS[2],
        this.FAKE_BOOKS[3],
      ]
    },
    {
      id: 20,
      firstName: "Тарас",
      lastName: "Шевченко",
      parentName: "Иванович",
      birthdate: new Date(1814, 2, 9),
      books: [
        this.FAKE_BOOKS[2],
        this.FAKE_BOOKS[3],
      ]
    },
    {
      id: 100,
      firstName: "Тарас",
      lastName: "Шевченко",
      parentName: "Иванович",
      birthdate: new Date(1814, 2, 9),
      books: [
        this.FAKE_BOOKS[2],
        this.FAKE_BOOKS[3],
      ]
    }
  ];



  constructor() { }

  getAuthors(): IAuthor[] {
    return this.FAKE_AUTHORS;
  };

  getAuthor(id: number): IAuthor {
    return this.FAKE_AUTHORS[this.getAuthorIndex(id)];
  }

  getAuthorIndex(id: number): number {
    let authorIndex;
    let isExistingElement;
    isExistingElement = this.FAKE_AUTHORS.find((element, index) => {
      if (element.id === id) {
        authorIndex = index;
        return true;
      }
    })

    if (isExistingElement) {
      return authorIndex
    } else {
      throw new Error("Элемент с данным ID не найден. Запросите на удаление существующий элемент.")
    }
  }

  deleteAuthor(id: number) {
    this.FAKE_AUTHORS.splice(this.getAuthorIndex(id), 1);
  }

  // getBooks(): IBook[] {
  //   return this.FAKE_BOOKS;
  // };
}

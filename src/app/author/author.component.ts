import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from '../shared/author.service';
import { IAuthor } from '../shared/iauthor';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  currentAuthorId: number; 
  curentAuthor: IAuthor;
  isFormVisible = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authorService: AuthorService,
    private renderer2: Renderer2,

  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
        this.currentAuthorId = +params['id']
        this.curentAuthor = this.authorService.getAuthor(this.currentAuthorId); // Если данные будут запрашиваться с сервера (а не напрямую с сервиса (не хардкодом)) -- такой метод не сработает и нужно подписываться на получение этих данных с настоящего (либо эмуляции) сервера. И использовать Observable
    })
  }

  showChangeForm(formElement:HTMLFormElement) {

    if(formElement.style.display === "block") {

      this.renderer2.setStyle(formElement, "display", "none")
    } else {
      this.renderer2.setStyle(formElement, "display", "block")
    }
    // this.isFormVisible = !this.isFormVisible;
  }

  deleteBook() {
    alert("Пропишите логику удаления книги (метод сплайс у массива книг конкретного автора.)")
  }

  logMethod(element) {
    console.dir(element)
  }

  changeBook(bookId: number) {

    let formBookName;
    let formBookPages;
    let formBookGenre;

    // Смотришь курс Владилена по формам
    // Захватить все данные с формы (19-26 строка в HTML файле)
    // Записать в переменную formData данные из формы.
    // Находишь книгу по ID (найти её индекс... точно также как и автора)
    // Меняешь её (Обращаешься к элементу по индексу, и просто меняешь его)
    // Еще раз брать инфу об авторе
  }

}

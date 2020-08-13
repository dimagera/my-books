import {IBook} from "./ibook"

export interface IAuthor {
    id: number;
    firstName: string;
    lastName: string;
    birthdate: Date;
    books: IBook[];
}

import { Author } from './author.entity';
import { Genre } from './genero.entity';

export class Book {
  title: string;
  author: Author;
  genre: Genre;
  publishDate: Date;
}

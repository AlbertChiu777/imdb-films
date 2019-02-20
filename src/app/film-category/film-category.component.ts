import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Film } from '../film.model';
import { FilmService } from '../film.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-film-category',
  templateUrl: './film-category.component.html',
  styleUrls: ['./film-category.component.scss']
})
export class FilmCategoryComponent implements OnInit {

  public films: any[] = [];

  constructor(private filmService: FilmService) {
    this.getfilms(environment.production);

  }

  getfilms(production: boolean) {
    if (!production) {
      this.films = [
          {
            title: '上映中電影',
            films: [
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg',
                Title: '1',
              },
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg',
                Title: '1',
              },
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg',
                Title: '1',
              },
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg',
                Title: '1',
              },
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BMTg0MzA1ODg5M15BMl5BanBnXkFtZTYwODYxMTU3._V1_SX300.jpg',
                Title: '1',
              }
            ]
          },
          {
            title: '喜愛的電影',
            films: [
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                Title: '1',
              },
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                Title: '1',
              },
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                Title: '1',
              }
            ]
          },
          {
            title: '近期上映',
            films: [
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                Title: '1',
              },
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                Title: '1',
              },
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                Title: '1',
              },
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                Title: '1',
              },
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                Title: '1',
              },
              {
                Poster: 'https://m.media-amazon.com/images/M/MV5BYzNjMzFkZWEtZjZjMS00OTQwLTgwZTgtOGJiNThlZmE3ZmMxXkEyXkFqcGdeQXVyMTc5OTQwMzk@._V1_SX300.jpg',
                Title: '1',
              }
            ]
          },
        ];
        return;
      }
    Object.keys(this.filmService.films).forEach( (filmTypeTitle) => {
      const httprequests = this.filmService.films[filmTypeTitle].map( (movieTitle) => {
        return this.filmService.getFilms(movieTitle);
      });
      forkJoin( httprequests ).subscribe( (resp: Film[]) => {
        this.films.push({
          title: filmTypeTitle,
          films: [...resp]
        });
        console.log(filmTypeTitle, resp);
      });
    });
  }


  ngOnInit() {
  }

}

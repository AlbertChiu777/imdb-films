import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Film } from './film.model';


@Injectable({
  providedIn: 'root'
})
export class FilmService {
  public films = {
    '上映中電影': [
      'ALITA BATTLE ANGEL',
      'Run the Race',
      'Prosecuting Evil',
      'The Upside',
      'A Dog\'s Way Home',
      'Glass',
      'Arctic',
      'Isn\'t It Romantic',
      'Happy Death Day 2U',
      'To Dust',
      'Untogether',
      'The Man Who Killed Hitler and Then The Bigfoot',
    ],
    '喜愛的電影': [
      'How to Train Your Dragon: The Hidden World',
      'Fighting with My Family',
      'Total Dhamaal',
      'Escape Room',
      'Braid',
      'Serenity',
      'The Kid Who Would Be King',
      'The Prodigy',
      'Cold Pursuit',
    ],
    '近期上映': [
      'HAN DAN',
      'The Lego Movie 2: The Second Part',
      'They Shall Not Grow Old',
      'What Men Want',
      'Cold Pursuit',
      'Miss Bala',
      'The Unicorn',
      'Piercing',
    ]
  };
  private apiPath = 'https://www.omdbapi.com/';
  private filmDetail = {};

  constructor(private http: HttpClient) { }

  public getFilms(title: string): Observable<any> {
    if (this.filmDetail[title] !== undefined) {
      return of(this.filmDetail[title]);
    }
    const params = new HttpParams({
      fromObject: {
        apikey: environment.apiKey,
        t: title,
        plot: 'full'
      }
    });
    return this.http.get(this.apiPath, {
      params: params,
      responseType: 'json',
    }).pipe(map(
      (resp: Film) => {
        this.filmDetail[title] = resp;
        return resp;
      }
    ));
  }
}

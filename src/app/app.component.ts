import { Component, OnInit } from '@angular/core';
import { FilmType, Film } from './film.model';
import { FilmService } from './film.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}

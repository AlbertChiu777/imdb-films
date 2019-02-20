import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';
import { Film } from '../film.model';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  public filmData: Film;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.filmService.getFilms(id).subscribe(
      (film) => {
        this.filmData = film;
      }
    );
  }

  backToList() {
    this.router.navigate([''], {relativeTo: this.route});
  }

}

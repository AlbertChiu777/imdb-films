import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  @Input() title = '';
  @Input() filmList = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

  }

  clickImage(film: Film) {
    this.router.navigate(['/film', film.Title], {relativeTo: this.route});
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  public title = 'test123';

  constructor() { }

  ngOnInit() {
  }

  clickImage() {
    console.log('img click');
  }

}

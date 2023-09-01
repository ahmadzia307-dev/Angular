import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
//implements OnInit
{  
  title:string='';
  // ngOnInit(): void {
  //   this.moviesInTheaters = [
  //     {
  //       title:'Spider-Man',
  //       releaseDate:new Date(),
  //       price:1400.999,
  //       poster:'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UY720_.jpg'
  //     },
  //     {
  //       title:'Spider-Man1',
  //       releaseDate:new Date(),
  //       price:1400.999,
  //       poster:'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UY720_.jpg'
  //     }
  //     ];
     
  //     this.moviesFutureReleases = [
  //       {
  //         title:'Spider-Man FR',
  //         releaseDate:new Date(),
  //         price:1400.999,
  //         poster:'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UY720_.jpg'
  //       },
  //       {
  //         title:'Spider-Man1 fr',
  //         releaseDate:new Date(),
  //         price:1400.999,
  //         poster:'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UY720_.jpg'
  //       }
  //       ];
  //      // this.moviesFutureReleases = [];
  // }

  // title = 'angular-movies';
  // moviesInTheaters:any;
  // moviesFutureReleases:any;

  duplicateNumber(n:number)
  {
    return n*2;
  }
}

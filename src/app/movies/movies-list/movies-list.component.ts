import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit{
  ngOnInit(): void {
    // setTimeout(()=>
    // {
    // //  this.movies = [];
    //   this.movies = [
    //     {
    //       title:'Spider-Man',
    //       releaseDate:new Date(),
    //       price:1400.999
    //     },
    //     {
    //       title:'Spider-Man1',
    //       releaseDate:new Date(),
    //       price:1400.999
    //     },
    //     {
    //       title:'Spider-Man2',
    //       releaseDate:new Date(),
    //       price:1402.999
    //     },
    //     {
    //       title:'Spider-Man3',
    //       releaseDate:new Date(),
    //       price:14011.999
    //     }
    //     ];
    // },3000);
  }

  @Input()
  movies:any;

  remove(index:number)
  {
    this.movies.splice(index,1);
  }
}

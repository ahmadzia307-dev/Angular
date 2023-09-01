import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maxRatinng = 5;
  maxRatingArr:any = [];
  @Input()
  selectedRate = 0;
  previousRate = 0;


  ngOnInit():void{
    this.maxRatingArr = Array(this.maxRatinng).fill(0);
  }

  handleMouseEnter(index:number)
  {
    this.selectedRate = index+1;
  }
  handleMouseLeave()
  {
    if(this.previousRate !==0)
    {
      this.selectedRate = this.previousRate;
    }
    else
    {
      this.selectedRate=0;
    }
    
  }
  
  rate(index:number)
  {
    this.selectedRate = index+1;
    this.previousRate = this.selectedRate;
  }
}

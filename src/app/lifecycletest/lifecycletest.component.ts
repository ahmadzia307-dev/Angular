import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../Utilities/rating/rating.component';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css']
})
export class LifecycletestComponent  implements OnInit,OnChanges,OnDestroy,DoCheck,AfterViewInit{
 
  @Input()
  title:string | undefined;

  @ViewChild(RatingComponent) rating: RatingComponent | undefined;
  
  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.rating);
    
    setInterval(() => console.log(new Date()),1000);
  
  }
 
  ngAfterViewInit():void{
    console.log('ngAfterViewInit');
    console.log(this.rating);
  }

  ngOnChanges( changes:SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

}

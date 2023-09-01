import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUpperCase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genre.model';
import { DeactivateGeneric } from 'src/app/deactivate.generic';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent  implements OnInit, DeactivateGeneric{

  constructor(private router:Router, private formBuilder:FormBuilder)
  {

  }
  isFormValid = () => true;
  


  ngOnInit(): void {
  
  }

  saveChanges(genreCreationDTO:genreCreationDTO):void
  {
    console.log("genreCreationDTO : ",genreCreationDTO)
    this.router.navigate(['/genres']);

  }
}

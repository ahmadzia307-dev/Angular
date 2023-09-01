import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUpperCase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genre.model';
import { DeactivateGeneric } from 'src/app/deactivate.generic';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit , DeactivateGeneric{
  constructor(private router:Router, private formBuilder:FormBuilder)
  {

  }
  isFormSubmitted = false;
  isFormValid = () => this.isFormSubmitted || this.form?.dirty;
  @Input()
  model!:genreCreationDTO
  
  form!: FormGroup;

  @Output()
  onSaveChanges:EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  ngOnInit(): void {
    this.form =  this.formBuilder.group({
      name:['',{
        validators:[
          Validators.required,
          Validators.minLength(3),
          firstLetterUpperCase()
        ]
      }],
    });

    if(this.model !=null)
    {
      this.form.patchValue(this.model);
    }
  }

  saveChanges():void
  {
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName()
  {
    const field = this.form.get('name');

    if(field?.hasError('required'))
    {
      return "The name field is required.";
    }
    if(field?.hasError('minlength'))
    {
      return "The minimum length is 3.";
    }

    if(field?.hasError('firstLetterUpperCase'))
    {
      return field.getError('firstLetterUpperCase').message;
    }

    return "";
  }
}

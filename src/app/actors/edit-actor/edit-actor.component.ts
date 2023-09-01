import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute){

  }

  model:actorDTO = {
    name:'Tom Halland',
     dateOfBirth:new Date(),
     picture:'https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg'};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
     //  alert(params['id']);
    });


  }

  saveChanges(actorCreationDTO:actorCreationDTO)
  {
    console.log("actorCreationDTO : ",actorCreationDTO);
  }
}

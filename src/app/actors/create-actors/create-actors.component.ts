import { Component } from '@angular/core';
import { actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-create-actors',
  templateUrl: './create-actors.component.html',
  styleUrls: ['./create-actors.component.css']
})
export class CreateActorsComponent {

  constructor(){}

  saveChanges(actorCreationDTO:actorCreationDTO)
  {
    console.log("actorCreationDTO : ",actorCreationDTO);
  }
}

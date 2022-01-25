import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  message!: any;
  actor_name!: any;
  character_name!: any;
  isClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
   
  clicked(): void {
    this.message = "Show more"
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  actor_name!: any;
  character_name!: any;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  username: any = "Shiba username";
  comment: any = "Koenaite comment";
  constructor() { }

  ngOnInit(): void {
  }

}

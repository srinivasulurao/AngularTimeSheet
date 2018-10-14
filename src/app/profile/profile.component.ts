import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../app.component.css','./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile_title;
  constructor() { }

  ngOnInit() {

    this.profile_title==localStorage.getItem('full_name'); 
  }

}

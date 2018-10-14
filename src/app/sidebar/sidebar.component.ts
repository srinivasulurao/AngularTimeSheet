import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public user_img;
  public user_directory="http://localhost:81/OracleTimeSheet/public/images/";
  public user_name;
  public user_designation;
  public user_links;
  public current_url;


  constructor(router:Router) {
    this.current_url=router.url;
   }

   isActiveUrl(link_url){
     console.log(link_url,this.current_url); 
     if(link_url==this.current_url)
       return true;
     else
       return false;
   }

  ngOnInit() {
    this.user_img=this.user_directory+localStorage.getItem('profile_pic'); 
    this.user_name=localStorage.getItem('full_name'); 
    this.user_designation=localStorage.getItem('user_type'); 

    if(this.user_designation.indexOf('Director') > -1){
      
    }
    else{
      this.user_links=[
        {"href":"/dashboard","icon":"fa fa-tachometer","name":"Dashboard"},
        {"href":"/profile","icon":"fa fa-user-circle","name":"Profile"},
        {"href":"/change-password","icon":"fa fa-lock","name":"Change Password"},
        {"href":"/add-timesheet","icon":"fa fa-list-ul","name":"Add Timesheet"},
        {"href":"/previous-timesheets","icon":"fa fa-list-ol","name":"Previous Timesheets"},       
        {"href":"/projects","icon":"fa fa-tasks","name":"Allotted Projects"}
      ]
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"; 
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  title = 'Resourse Planning Tool';
  public user_email;
  public dropDownVisibility;
  public dropDownMenuVisibility;
  public dropDown;
  constructor(private router: Router) { 
    this.dropDown=false;
    
    
  }

  ngOnInit() {
    this.user_email=localStorage.getItem('email'); 
    if(this.router.url=="/login" || this.router.url=="/"){
      this.dropDownVisibility={display:"none"};
    }
    else{
      this.dropDownVisibility={display:"block"};
    }
  }

  showHideDropDown(){

    if(this.dropDown==false){
        this.dropDownMenuVisibility={display:"block"};
        this.dropDown=true;
    }
    else{
      this.dropDownMenuVisibility={display:"none"};
        this.dropDown=false;
    }
  }

  logout(){
    localStorage.clear();
    this.showHideDropDown(); 
    this.router.navigateByUrl("/login"); 
  }

} //Class ends here.

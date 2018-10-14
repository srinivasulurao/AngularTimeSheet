import { Component, OnInit } from '@angular/core';
import { LaravelService } from '../laravel.service';
import { Router } from '@angular/router';
import { error } from 'protractor';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css','./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Resourse Planning Tool';
  public form_box_class='';
  public label_email="Email ID";
  public label_password="Password";
  public submit_button_styles;
  public sign_in_status="Sign In";
  public submit_button_class;
  public submit_disabled;
  public warning_message;
  public warning_style;
  public warning_class;
  constructor(private laravel:LaravelService, private router:Router) { 

   //Initializing the values in constructor.
   this['oracle_email']="srinivasulu.rao@oracle.com"; 
   this['oracle_password']="ATG2dfPQ2ee";  
   this.warning_class="alert alert-danger";
   this.warning_style={display:"none",fontWeight:"bold",position:"absolute"};
   
  }

  getSubmitButtonStyle(){
    this.submit_button_styles={fontWeight:"bold",float:"right"};
    this.submit_button_class='btn btn-primary';
  }

  ngOnInit() {
    this.form_box_class="jumbotron";
    this.submit_disabled=false;
    this.getSubmitButtonStyle();
  }

  

  AuthenticateCredentials(email,password)
  {
     
    if(this.validateCredentials(email,password)===false){
      return false;
    }
    //alert(email+"--"+password); 
    this.sign_in_status="Authenticating ...."; 
    this.submit_disabled=true;

    //Now call the service to get the data.
    this.laravel.authenticateUser(email,password).subscribe(data=>{
      console.log(data); 
      var response=JSON.parse(JSON.stringify(data)); 
      this.sign_in_status="Redirecting ...";
      this.submit_disabled=false;
      this.submit_button_class="btn btn-success"; 
      //Now Set the values into the session, then redirect.
      if(response.status==200){
        for(var prop in response.user_details)
        {
         //Contains user_id,full_name,email,password,user_type,last_login,about_user.
          localStorage.setItem(prop,response.user_details[prop]); 
        } 

        var instance=this;
        setTimeout(function(){
          instance.router.navigateByUrl("/profile");
        },3000); 
          
      }
      else{
        this.warning_message=response.message;
        this.warning_style={display:"block"}; 
        this.warning_class="alert alert-danger";
        this.sign_in_status="Sign In";
         this.submit_disabled=false;
        localStorage.clear(); //No data to be added.
      } 
      
    },
    error=>{
        console.log(error); 
        //this.warning_message="Error: "+error.message; 
        this.warning_message="Error: Internal Server Error, Please contact administrator !";
        this.warning_style={display:"block"}; 
        this.warning_class="alert alert-danger";
        this.sign_in_status="Sign In";
         this.submit_disabled=false;
     }); //Ajax Call ends here.
    
  }


  validateCredentials(email,password){

    if(email==""){
      this.warning_message="Email Id is required !"; 
      this.warning_style={display:"block"}; 
      this.warning_class="alert alert-danger";
      return false;
    }
    
    if(password==""){
      this.warning_message="password is required !";
      this.warning_style={display:"block"}; 
      this.warning_class="alert alert-danger";
      return false;
    }

    return true;
     
    
  }


} //Class ends here.

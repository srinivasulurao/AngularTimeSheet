import {NgModule} from "@angular/core";
import {Routes,RouterModule, Router} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

const routes: Routes=[
    {path:"",component:LoginComponent}, //Or you can go for redirect component with redirectTo and pathMatch parameter.
    {path:"login",component:LoginComponent},
    {path:"profile",component:ProfileComponent},
    {path:"change-password",component:ChangePasswordComponent},
    {path:"**",component:PageNotFoundComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
export const routingComponents=[LoginComponent,ProfileComponent,PageNotFoundComponent]



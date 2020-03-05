import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule}   from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CollabrationComponent } from './collabration/collabration.component';
const appRoutes:Routes=[
  {path:'', component: BodyComponent, pathMatch:'full'},
  {path:'contact', component: ContactComponent  },
  {path:'aboutme', component: AboutmeComponent  },
  {path:'collabration', component: CollabrationComponent  },
  {path:'**', redirectTo:''}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContactComponent,
    AboutmeComponent,
    CollabrationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

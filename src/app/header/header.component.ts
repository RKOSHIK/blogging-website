import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  public showSearch() {
    document.getElementById('myOverlay').style.display = 'block';
  }

  public closeSearch() {
    document.getElementById('myOverlay').style.display = 'none';
  }
  public myFunction() {
    let x = document.getElementById("navbar");
    console.log('class-', x.className);
    if (x.className === "navbar") {
      x.className += " nav-collapse";
    } else {
      x.className = "navbar";
    }
  }

  ngOnInit(): void {
  }

}

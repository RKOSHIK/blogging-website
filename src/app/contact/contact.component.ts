import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myReactiveForm:FormGroup

  constructor() {
    
   }
  
  ngOnInit(): void {
    this.myReactiveForm =new FormGroup({
    'username': new FormControl(null, Validators.required),
    'email': new FormControl(null,[Validators.required,Validators.email]),
    'subject': new FormControl(null, Validators.required),
    'message': new FormControl(null, Validators.required)
});
  }
  onSend(){
    console.log(this.myReactiveForm.value)
    this.myReactiveForm.controls['username'].markAsTouched()
    this.myReactiveForm.controls['email'].markAsTouched()
    
  }
 
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""
  an_array = [
    {"email": "abc@com.au", "password": "abc"},
    {"email": "123@com.au", "password": "123"},
    {"email": "hello@com.au", "password": "world"}
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  buttonClicked(){
    if(this.matchInputs(this.email, this.password, this.an_array)){
      this.router.navigateByUrl("/account")
    }else{
      alert("Error: Incorrect email address or password")
    }
  }

  matchInputs(emailAdd, pass, array){
    var i;
    for (i = 0; i < array.length; i++){
      if (array[i].email === emailAdd && array[i].password === pass) {
        return true;
      }
    }
    return false
  }


}

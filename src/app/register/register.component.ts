import { Component, OnInit } from '@angular/core';
import { BackendService } from "../backend.service";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    branches=['CS' , 'IT' , 'CSE' ,'ECE' ,'EN' ,'EI' ,'ME' ,'CE'];
  constructor(private backend:BackendService) { }
  name: string;
  student_no: number;
  branch: string;
  mobile_no: number;
  email: string;
  password: string;
  response: any;
  formData: any;
  displayLoader = false;
  success = false;
  failure = false;
  topicHasError=true;

  ngOnInit() {}

  register(data) {
    this.formData = data.value;
    this.displayLoader = true;
    this.backend.register(this.formData).subscribe(res => {
      this.displayLoader = false;
      if (res.status == 200) {
        this.success = true;
      } else {
        this.failure = true;
      }
      
    });

    data.reset();
  }
  validateTopic(value){
    if (value==='default'){
      this.topicHasError=true;
    }else{
      this.topicHasError=false;
    }
  }

  removeAlert() {
    var element = document.getElementById("alert");
    element.remove();
  }
}


  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private backend: BackendService, private router: Router) {}

  student_no: number = null;
  password: string = null;
  formData: any;
  displayLoader = false;
  failure = false;
  
  

  ngOnInit() {}

  login(data) {
    this.formData = data.value;
    this.displayLoader = true;
    this.failure = false;
    this.backend.login(this.formData).subscribe((res) => {
      this.displayLoader = false;
      console.log(res)
      localStorage.setItem('token' , res.body.token)
      if (res.status == 200) {
        this.router.navigateByUrl('/covid');
      } else {
        this.failure = true;
      }
    });
    data.reset();
  }

  removeAlert() {
    var element = document.getElementById('alert');
    element.remove();
  }
}

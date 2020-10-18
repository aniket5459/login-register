import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  

  constructor(private backEnd : BackendService) { }

  data:any;
  ngOnInit(): void {
    this.backEnd.getData().subscribe((result)=>{
      this.data=result;
    });
  }
}

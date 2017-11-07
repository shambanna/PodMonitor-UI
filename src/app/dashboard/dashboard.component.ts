import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ServerUrl } from '../Config'
import { Router, NavigationExtras } from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
public responce;
public cmd;
  constructor(private http: Http, private router: Router) {
   
}
  ngOnInit() {
    this.http.get(ServerUrl + '/welcome')
        .map(res => res.json()).subscribe((resp) => {
            this.responce = resp
            console.log("=======================================================")
            console.log(this.responce);
  });

}
onSubmit(data){
  console.log(data)
  this.http.post(ServerUrl + '/runcmd',JSON.stringify(data))
  .map(res => res.text()).subscribe((resp) => {
      this.responce = resp
      console.log("=======================================================")
      console.log(this.responce);
});

}
}

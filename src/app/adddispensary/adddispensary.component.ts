import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddispensary',
  templateUrl: './adddispensary.component.html',
  styleUrls: ['./adddispensary.component.css']
})
export class AdddispensaryComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  
  goBack() {
    window.history.go(-1);
  }
  routertodispensaryproduct() { this.router.navigate(['/adddispensary']);}

}

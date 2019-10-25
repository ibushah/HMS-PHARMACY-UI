import { Component, OnInit } from '@angular/core';
import { Grn } from '../grn-form/Grn';
import { GrnService } from '../Services/grn.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grn-detail',
  templateUrl: './grn-detail.component.html',
  styleUrls: ['./grn-detail.component.css']
})
export class GrnDetailComponent implements OnInit {

  companies = [];
  id: any;
  grn: Grn;

  constructor(private service: GrnService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.grn = new Grn();
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id)
      this.getGrn(this.id);
  }
  getGrn(id) {

    this.service.getGrnById(id).subscribe((response) => {
       console.log(response)
      this.grn = response;


    })
  }
  routeToGrnList()
  {
    this.router.navigate(['grnlist'])
  }

}

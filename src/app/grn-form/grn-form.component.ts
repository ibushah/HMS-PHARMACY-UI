import { Component, OnInit } from '@angular/core';
import {GrnService} from '../Services/grn.service'

@Component({
  selector: 'app-grn-form',
  templateUrl: './grn-form.component.html',
  styleUrls: ['./grn-form.component.css']
})
export class GrnFormComponent implements OnInit {

  status = [];
  constructor(private service:GrnService) { }

  ngOnInit() {
    this.status = [
      { label: 'Select status', value: null },
      { label: 'active', value: 'ative' },
      { label: 'not active', value: 'not ative' },

    ]

  }


  getCompanies()
  {
    
  }

  submitGrn(data) {
    console.log(data)
    this.service.postGrn(data).subscribe((response)=>
    {
      console.log(response)
    })
  }
}

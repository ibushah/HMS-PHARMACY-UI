import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GrnService } from '../Services/grn.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-grn-list',
  templateUrl: './grn-list.component.html',
  styleUrls: ['./grn-list.component.css']
})
export class GrnListComponent implements OnInit {

  cols: any;
  grnData = [];
  id;
  loader=true;
  constructor(private router: Router, private service: GrnService,private messageService: MessageService) { }

  ngOnInit() {

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'invoice', header: 'Invoice No' },
      { field: 'productName', header: 'Product Name' },
      { field: 'productTotalAmount', header: 'Product Total Amount' },
      { field: 'receivedBy', header: 'Received by' },
      { field: 'company', header: 'Company' }
    ];
    this.getGrnList();
  }

  getGrnList() {
    this.grnData = [];

    this.service.getGrnList().subscribe((response) => {

      this.loader=false;
      response.map((grn) => {
        var obj = {
          id: grn.id,
          invoice: grn.invoice,
          productName: grn.productName,
          productTotalAmount: grn.productTotalAmount,
          receivedBy: grn.receivedBy,
          company: grn.company.name
        }
        this.grnData = [...this.grnData, obj]
      })

    })
  }



  deleteGrn(id) {
    this.service.deleteGrn(id).subscribe((response) => { this.getGrnList(); 
      this.messageService.add({severity:'error', summary:'Service Message', detail:response}); })
  }
  gotoDetails(id) {
    this.router.navigate(['grndetail/' + id])
  }
  updateGrn(id) {
    this.router.navigate(['grn/' + id])
  }
  routeToGrn() {
    this.router.navigate(['grn'])
  }
}

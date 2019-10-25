import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductRegistrationService } from '../Services/product-registration.service';
import { DomSanitizer } from '@angular/platform-browser';
import { productRegistration } from '../product-registration/product-registration'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id;
  product: productRegistration = new productRegistration();

  constructor(private activateRoute: ActivatedRoute, private service: ProductRegistrationService, public _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {

    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id)
      this.getProduct(this.id);
  }
  getProduct(id) {

    this.service.getbyid(id).subscribe((response) => {
      console.log(response)
      this.product.qrCode += response.qrcode;
      // this.grn = response;


    })
  }

}

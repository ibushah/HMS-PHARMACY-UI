import { Component, ViewChild, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { SalesService } from "../../Services/sales.service";


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QrcodeComponent {

  @Output() productEmitter = new EventEmitter();

  constructor(private service: SalesService) {
  }

  onCodeResult(resultString: string, audio) {
    let code = parseInt(resultString);

    if (code) {
      this.service.getProductByQrCode(code).subscribe((response) => {
       
        if (response)
        {
       
          this.productEmitter.emit(response);
          audio.play();
        }
      })
    }

  }


}







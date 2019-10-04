import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(private messageService:MessageService) { }
  succesMethod(summary,detail) {
    this.messageService.add({
      severity: 'success',
      summary: summary.toString(),
      detail: detail.toString()
    });
  }



  errorMethod(summary,detail) {
    this.messageService.add({
      severity: 'error',
      summary: summary.toString(),
      detail: detail.toString()
    });
  }

}

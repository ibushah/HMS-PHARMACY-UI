import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { adddispensary } from './adddispensary';
import { DispensaryService } from '../Services/dispensary.service';
import { MessageService } from 'primeng/api';




@Component({
  selector: 'app-adddispensary',
  templateUrl: './adddispensary.component.html',
  styleUrls: ['./adddispensary.component.css']
})
export class AdddispensaryComponent implements OnInit {
 id:any;
 adddispensary:adddispensary=new adddispensary();
  
  constructor(private router:Router, private activateRoute: ActivatedRoute, private dispensaryservice:DispensaryService, private messageservice:MessageService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id)
      this.getdispensary(this.id);
  }
  
  getdispensary(id) {

    this.dispensaryservice.getDispensaryById(id).subscribe((response) => {
       console.log(response)
      this.adddispensary = response;


    })
  }
  goBack() {
    window.history.go(-1);
  }
  routertodispensaryproduct() { this.router.navigate(['/adddispensary']);}

  submitdispensary(){
    if(this.id!=null){
    this.dispensaryservice.updatebyid(this.id, this.adddispensary).subscribe(
    data => {
      this.messageservice.add({
        severity: "success",
        summary: "Succesfully",
        detail: "dispensary successfully Edit!"
      });
      
    },
    error => {
      // console.log(error);
      this.messageservice.add({
        severity: "error",
        summary: "Error Found",
        detail: "Something went wrong check your internet connection "
      });
    }


   )
    }
    
    else{
      this.dispensaryservice.postdispensary(this.adddispensary).subscribe(
        data => {
          //console.log(data);
          this.messageservice.add({
            severity: "success",
            summary: "Succesfully",
            detail: "dispensary successfully added!"
          });
          
        },
        error => {
          //console.log(error);
          this.messageservice.add({
            severity: "error",
            summary: "Error Found",
            detail: "Something went wrong check your internet connection "
          });
        }
      );
     
    }
    
  }

}

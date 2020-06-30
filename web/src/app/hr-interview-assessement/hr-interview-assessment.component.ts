import { IAssessment } from '../models/assessment.interface';
import { Component, OnInit } from "@angular/core";
import { AppServicesService } from "../services/app-services.service";
import { Router} from "@angular/router";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "../reusable-components/modal/modal.component";
import { HttpErrorResponse} from "@angular/common/http";
import { IResponse} from "../models/response.interface";

@Component({
  selector: "app-hr-interview-assessement",
  templateUrl: "./hr-interview-assessement.component.html",
  styleUrls: ["./hr-interview-assessement.component.scss"],
})
export class HrInterviewAssessementComponent implements OnInit {

    assessment: any = {}
    selectedItems: any;
    events: Event[] = [];

    items = [
        {id: 1, name: 'Accepted'},
        {id: 2, name: 'Rejected'}
    ];

  constructor(private AppServicesService: AppServicesService,
    private router: Router,
    private modalService : NgbModal) {}
 
  ngOnInit() {}
 
  onChange(event:any) {
   console.log(event.target.value);
}

  createAssessment(assessment: IAssessment) {
    let assessmentObj = assessment;
    this.AppServicesService.createAssessment(assessment).subscribe((res: any) => {
        const modalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.shouldConfirm = false;
        modalRef.componentInstance.success = res.body.success;
        modalRef.componentInstance.message = res.body.payload.message;
        modalRef.componentInstance.closeModal.subscribe((rerender: boolean) => {
          modalRef.close();
        
        
        });
      },
    
      (error: HttpErrorResponse) => {
        console.log(error, "response");
        const modalRef: NgbModalRef = this.modalService.open(ModalComponent);
        modalRef.componentInstance.shouldConfirm = false;
        modalRef.componentInstance.success = error.error.success;
        modalRef.componentInstance.message = error.error.payload.message;
        modalRef.componentInstance.closeModal.subscribe((rerender: boolean) => {
          modalRef.close();
        });
        
      }
    );
  }
}
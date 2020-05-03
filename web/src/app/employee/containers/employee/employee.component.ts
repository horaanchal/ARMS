import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { IResponse } from "src/app/models/response.interface";
import { ModalComponent } from "src/app/reusable-components/modal/modal.component";
import { EmployeeFormComponent } from "../../components/employee-form/employee-form.component";
import { EmployeeUploadComponent } from '../../components/employee-upload/employee-upload.component';
import { EmployeeService } from "../../employee.service";
import { IEmployee } from "../../models/employee.interface";

@Component({
  selector: "app-employee",
  styleUrls: ["employee.component.scss"],
  templateUrl: "employee.component.html",
})
export class EmployeeComponent implements OnInit {
  employees: IEmployee[] = [];
  columns: Array<String> = [];
  pager: IPager;

  constructor(
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(page?: number) {
    this.employeeService.getPaginatedEmployees(page).subscribe((res: IResponse) => {
      if (res.payload.data) {
        this.employees = res.payload.data.dataList;
        this.columns = ["name", "email", "employeeId", "designation", "role"];
        this.pager = res.payload.data.pager;
      }
    });
  };

  openModal(dataModal: IDataModal) {
    if (dataModal.formType === "update" && dataModal.data.employeeId) {
      dataModal.data.employeeId = Number(
        dataModal.data.employeeId.replace("CYG-", "")
      );
    } else {
      dataModal.data = {};
    }

    const modalRef: NgbModalRef = this.modalService.open(EmployeeFormComponent);
    modalRef.componentInstance.formType = dataModal.formType;
    modalRef.componentInstance.data = dataModal.data;
    modalRef.componentInstance.closeModal.subscribe((rerender: boolean) => {
      if (rerender) {
        this.getEmployees(this.pager.currentPage);
      }
      modalRef.close();
    });
  }

  deleteEmployee(employee: IEmployee) {
    const modalRef: NgbModalRef = this.modalService.open(ModalComponent);

    modalRef.componentInstance.shouldConfirm = true;

    modalRef.componentInstance.closeModal.subscribe((rerender: boolean) => {
      modalRef.close();
    });
    modalRef.componentInstance.emitPerformRequest.subscribe(() => {
      this.employeeService.deleteEmployee(employee._id).subscribe((res: IResponse) => {
        this.getEmployees(this.pager.currentPage);
        modalRef.componentInstance.success = res.success;
        modalRef.componentInstance.message = res.payload.message;
      }, (error: HttpErrorResponse) => {
        modalRef.componentInstance.success = error.error.success;
        modalRef.componentInstance.message = error.error.payload.message;
      });
    });
  }

  searchEmployee(character: string) {
    this.employeeService.searchEmployee(character).subscribe((res) => {
      this.employees = res.payload.data.dataList;
    });
  }

  openUpload(): void {
    const modalRef = this.modalService.open(EmployeeUploadComponent);
    modalRef.componentInstance.closeModal.subscribe((rerender: boolean) => {
      if (rerender) {
        this.getEmployees(this.pager.currentPage);
      }
      modalRef.close();
    });
  }
}

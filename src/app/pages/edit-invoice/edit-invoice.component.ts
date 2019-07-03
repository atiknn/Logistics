import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl,FormArray, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import * as userData from '../../shared/esentials/datasEsentials';
import { BookingMasterService } from 'app/shared/services/BookingMaster.service';
import { NewBooking } from 'app/shared/model/NewBooking.model';
import { newItemMasterService } from 'app/shared/services/newItemMaster.service';
import { newItem } from 'app/shared/model/newItem.model';
import { frieghtCharges } from 'app/shared/model/frieghtCharges.model';
import { freightAdditional } from 'app/shared/model/freightAdditional.model';
import { editinvoice } from 'app/shared/model/editinvoice.model';
import { InvoiceService } from 'app/shared/services/Invoice.service';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss'],
  providers: [DatePipe]
})
export class EditInvoiceComponent implements OnInit {

  addition;
  pname;
  randomnumber;
  regularForms: FormGroup;
  newBooking: NewBooking;
  invoiceDate;
  msg: string;
  alerts;
  data : {};
  forword_agent;
  notify_agent;
  commudity;
  newItemsList: newItem[];
  index: any;
  textValue: any;
  affctextValue: any;
  totalffc: number = 0;
  patchAffc : frieghtCharges[];
  totaladlc: number = 0;
  patchadlc: freightAdditional[];
  totalchages: number;
  editInvoice: editinvoice;
  exEditInvoice: editinvoice;
  adlcmodel;
  affcmodel;
  blNo;

  constructor(private datePipe: DatePipe, 
    private fb: FormBuilder, 
    private _AR: ActivatedRoute,
    private _bookingService: BookingMasterService,
    private _newItemservice: newItemMasterService,
    private _invoiceService: InvoiceService) { 
    // this.affcc = this.fb.array([]);
    // this.adlcc = this.fb.array([]);
  }

  ngOnInit() {
    this._newItemservice.getAllItem().subscribe(data => {
      this.newItemsList = data;
    })
    this._AR.params.subscribe(data=>{this.pname = data['id']});
    

    this.regularForms = this.fb.group({
      id:[],
      blno: [],
      forword_agent: [],
      notify_agent: [],
      particulars: [],
      receipt_no: [],
      receipt_date: [],
      customer_code: [],
      totalsffc: [],
      totaladlcc: [],
      totalCharges: [],
      cheque: [],
      remarks: ['', Validators.required],
      affc: this.fb.array([this.addFreightCharges()]),
      adlc: this.fb.array([this.addAdditionalCharges()]),
      created_by: [userData.getIds()],
      created_on: [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")] 
    })
    this.setValue();
  }

  setValue(){
    this._bookingService.getBookingByid(this.pname).subscribe(data => {
      this.newBooking = data;
      this.forword_agent = this.newBooking.forwordAgent;
      this.notify_agent = this.newBooking.notifyParty;
      this.commudity = this.newBooking.commuditydetails;
      this.blNo = this.newBooking.billNo;

      this._invoiceService.getInvoice(this.blNo).subscribe(data => {
        this.exEditInvoice = data;
        if(this.exEditInvoice === null){
          this.randomnumber = this.datePipe.transform(userData.getDate(), "yyMMddHHmmss")
          this.randomnumber = "HIN"+this.randomnumber;
          this.invoiceDate = this.datePipe.transform(userData.getDate(), "yyyy-MM-dd");
        } else {
          for(let line=1; line < this.exEditInvoice.affc.length; line++){
            this.addFreightChargeButton();
          }
          for(let line=1; line < this.exEditInvoice.adlc.length; line++){
            this.addAdditionalChargesButton();
          }
          this.regularForms.patchValue(this.exEditInvoice);
        }
      });
    })
  }

  addAdditionalCharges(): FormGroup{
    return this.fb.group({
      adlCharges: [],
      adlUnit: [],
      adlqty: [],
      adlkgs: [],
      adlAmt1: [],
      adlAmt2: []
    })
  }


  addFreightCharges(): FormGroup {
    return this.fb.group({
      affcchargesitems: [],
      affunitPrice: [],
      affQty: [],
      affkgs: [],
      aff_amt_usd1: [],
      aff_amt_usd2: []
    })
  }

  addFreightChargeButton(): void{
    (<FormArray>this.regularForms.get('affc')).push(this.addFreightCharges());
    this.affcalculator();
  }

  removeFreightChargeButton(i: number) {
    const control = <FormArray>this.regularForms.get('affc');
    control.removeAt(i);
    this.affcalculator();
  }

  addAdditionalChargesButton(): void{
    (<FormArray>this.regularForms.get('adlc')).push(this.addAdditionalCharges());
    this.adlCalculator();
  }

  removeAdditionalChargesButton(i: number){
    const control = <FormArray>this.regularForms.get('adlc');
    control.removeAt(i);
    this.adlCalculator();
  }

  onsubmit(value: editinvoice){
    value.blno = this.newBooking.billNo;
    console.log(value);
    this._invoiceService.getInvoice(this.blNo).subscribe(data => {
      this.exEditInvoice = data;
      if(this.exEditInvoice === null) {
        this._invoiceService.addInvoice(value).subscribe(data =>{
          this.editInvoice = data;
          if (this.editInvoice.id != null) {
            this.msg = "Saved Successfully with id : "+this.editInvoice.id;
            this.alerts = 'alert alert-success';
            this.regularForms.disable();
          } else {
            this.msg = "Not Saved";
            this.alerts = 'alrert alert-danger';
          }
        })
      } else {
        this._invoiceService.EditedInvoice(value).subscribe(data => {
          this.editInvoice = data;
          if (this.editInvoice.id != null) {
            this.msg = "Saved Successfully with id : "+this.editInvoice.id;
            this.alerts = 'alert alert-success';
            this.regularForms.disable();
          } else {
            this.msg = "Not Saved";
            this.alerts = 'alrert alert-danger';
          }
        })
      }
    });
    
  }

  getadlCharges(event: newItem,id){
    console.log(event);
    this.textValue=event.amount;
    this.regularForms.value['adlc'][id]['adlUnit']=this.textValue;
    this.regularForms.value['adlc'][id]['adlkgs'] = event.unit;
    this.regularForms.patchValue(this.regularForms.value);
    this.adlCalculator()
  }

  getadlQty(event,id){
      this.regularForms.value['adlc'][id]['adlAmt1']=this.textValue*event.target.value;
      this.regularForms.patchValue(this.regularForms.value);
      this.adlCalculator();
  }

  adlCalculator() {
    this.totaladlc = 0;
    this.patchadlc = this.regularForms.get('adlc').value;
    console.log(this.patchadlc);
    for(let s of this.patchadlc){
      this.totaladlc = this.totaladlc + s.adlAmt1;
    }
    console.log(this.totaladlc);
    this.regularForms.value['totaladlcc'] = this.totaladlc;
    this.regularForms.patchValue(this.regularForms.value);
    this.totalChages();
  }

  totalChages(){
    this.totalchages = this.adlcmodel + this.affcmodel;
    this.regularForms.value['totalCharges'] = this.totalchages;
    this.regularForms.patchValue(this.regularForms.value);
  }

  getaffcCharges(event: newItem,id){
    this.affctextValue = event.amount;
    this.regularForms.value['affc'][id]['affunitPrice']=this.affctextValue;
    this.regularForms.value['affc'][id]['affkgs']=event.unit;
    this.regularForms.patchValue(this.regularForms.value);
    this.affcalculator();
  }

  getaffcQty(event, id){
    this.regularForms.value['affc'][id]['aff_amt_usd1']=this.affctextValue*event.target.value;
    this.regularForms.patchValue(this.regularForms.value);
    this.affcalculator();
  }

  affcalculator(){
    this.totalffc = 0;
    this.patchAffc = this.regularForms.get('affc').value;
    for(let s of this.patchAffc){
      this.totalffc = this.totalffc + s.aff_amt_usd1;
    }
    this.regularForms.value['totalsffc']=this.totalffc;
    this.regularForms.patchValue(this.regularForms.value);
    this.totalChages();
  }




}

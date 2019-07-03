import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as userData from '../../shared/esentials/datasEsentials';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingMasterService } from 'app/shared/services/BookingMaster.service';
import { AgentMasterService } from 'app/shared/services/AgentMaster.service';
import { VesselMasterService } from 'app/shared/services/VesselMaster.service';
import { ConsigneeMasterService } from 'app/shared/services/ConsigneeMaster.service';
import { ShipperMasterService } from 'app/shared/services/ShipperMaster.service';
import { NotifyMasterService } from 'app/shared/services/NotifyMaster.service';
import { CommudityService } from 'app/shared/services/Commudity.service';
import { Vessel_Master } from 'app/shared/model/Vessel.model';
import { ports } from 'app/shared/model/ports.model';
import { PortsData } from 'app/shared/model/PortsData.model';
import { Consignee_master } from 'app/shared/model/consignee.model';
import { Shipper_master } from 'app/shared/model/shipper.model';
import { Agents } from 'app/shared/model/AddAgent.model';
import { NotifyMaster } from 'app/shared/model/notifymaster.model';
import { Commudity } from 'app/shared/model/Commudity.model';
import { NewBooking } from 'app/shared/model/NewBooking.model';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-billof-leading',
  templateUrl: './billof-leading.component.html',
  styleUrls: ['./billof-leading.component.scss'],
  providers: [DatePipe]
})
export class BillofLeadingComponent implements OnInit {

  pname;
  msg: string;
  alerts;
  vesselname: Vessel_Master[];
  onevesselNAme: Vessel_Master[];
  consignee: any;
  expaddress: any;
  exportref: any;
  regularForms: FormGroup;
  modelTemp: any;
  commudityDetails: any;
  names: string;
  ports_details: ports[];
  selectvessel;
  preorigin: ports[];
  portsData: PortsData[];
  voyageno;
  clientSearchService: any;
  consignne : Consignee_master[];
  statesWithFlagss : Shipper_master[];
  agentMaster: Agents[];
  notifyMaster: NotifyMaster[];
  commudityMaster: Commudity[];
  newBooking: NewBooking;
  notifyPartyAddress: string;
  //randomnumber;
  //containerno;
  chars;
  // sealNo;
  // marksNo;
  coutryOrigins;
  subValues;
  ids;
  billNos;
  notifyparty: NotifyMaster[];

  constructor(private datePipe: DatePipe, 
    private fb: FormBuilder, 
    private _AR: ActivatedRoute, 
    private _router: Router,
    private _agentmaster: AgentMasterService,
    private _vesselmaster: VesselMasterService,
    private _consignee: ConsigneeMasterService,
    private _shipperMasterService: ShipperMasterService,
    private _notifyService: NotifyMasterService,
    private _commudityService: CommudityService,
    private _bookingService: BookingMasterService
    ) { }

  ngOnInit() {
    this._AR.params.subscribe(data=>{this.pname = data['id']});
    this._consignee.getAllConsignee().subscribe(data => {
      this.consignne = data
    })

    this._agentmaster.getAllAgents().subscribe(data => {
      this.agentMaster = data
    })

    this._vesselmaster.getAllVessel().subscribe(data => {
      this.vesselname = data;
    })

    this._notifyService.getAllNotifyMaster().subscribe(data => {
      this.notifyMaster = data;
    })

    this._commudityService.getCommudity().subscribe(data => {
      this.commudityMaster = data;
    })

    // this.randomnumber = this.datePipe.transform(userData.getDate(), "yyMMddHHmmss")
    // this.randomnumber = "HHP"+this.randomnumber;

    // this.containerno = this.datePipe.transform(userData.getDate(), "MMddss")
    // this.chars = userData.getChars(+this.datePipe.transform(userData.getDate(), "ss"))
    // this.containerno = "HH"+this.chars+this.containerno;

    // this.sealNo = this.datePipe.transform(userData.getDate(), "HHmmss")
    // this.chars = userData.getChars(+this.datePipe.transform(userData.getDate(), "mm"))
    // this.sealNo = "HS"+this.chars+this.sealNo;

    // this.marksNo =  this.datePipe.transform(userData.getDate(), "yymmss")
    // this.chars = userData.getChars(+this.datePipe.transform(userData.getDate(), "ss"))
    // this.marksNo = "HM"+this.chars+this.marksNo;

    this.regularForms = this.fb.group({
      billNo: [],
      shipper: [''], //ok
      consignee : [''], //ok
      exportRef : [''], //ok
      forwordAgent : [''], //ok
      notifyParty : [''], //ok
      countryOrigin : [''], //ok
      notifyAndShippingAgent : [''], //ok
      vesselName : [], //ok
      voyagenos : [''], //ok
      preCarrigeby : [], //ok
      placeReceipt: [], //ok
      inlandRouting: [], //ok
      placeDelivery: [], //ok
      finalDestination: [], //ok
      transhipment: [], //ok
      commuditydetails : [''], // ok
      marksAndNumber: [], //ok
      sealNo: [], //ok
      containerNos: [], //ok
      trackingContainerNo: [], //ok
      containerISO: [], //ok
      pol_code: [], //ok
      pol_name: [], //ok
      pod_code: [], //ok
      pod_name: [], //ok
      departureDate: [], //ok
      arriveDate: [], //ok
      measurement: [], //ok
      totalCharges: [], //ok
      maxGrossWeight: [], //ok
      containerGrossWeight: [], //ok
      noBl: [], //ok
      obd: [], //ok
      conPackages: [], //ok
      loadGrossWeight: [], //ok
      forTheCarrier: [], //ok
      excRate: [], //ok
      units: [], //ok
      prepaid: [], //ok
      noContainerPkgs: [], //ok
      freightCharges: [], //ok
      collect: [], //ok
      declaredValue: [], //ok
      datedAt: [], //ok
      containerDiscription: [], //ok
      remarks: [], //ok
      deliveryAgent: [], //ok
      ctnrDate: [], //ok
      voyageno1: [], //ok
      statusDetails: [], //ok
      vesselName1: [], //ok
      ctnrDepotNo: [], //ok
      bookNo: [], //ok
      created_by: [userData.getIds()], //ok
      created_on: [this.datePipe.transform(userData.getDate(), "yyyy-MM-dd")]  //ok
    });
    this._bookingService.getBookingByid(this.pname).subscribe(data => {
      this.newBooking = data;
      this.billNos = this.newBooking.billNo;
      this.ids = this.newBooking.id;
      //this.notifyPartys(this.newBooking.notifyParty);
      this.regularForms.patchValue(this.newBooking);
    })
  }

  
  notifyPartys(event){
    this.notifyparty = this.notifyMaster.filter(datas => datas.name == event)
    this.notifyPartyAddress = this.notifyparty[1].address;
  }

  onSelectVessels(event){
    this.selectvessel = event;
    this.onevesselNAme = this.vesselname.filter(datas => datas.name == this.selectvessel);
    this.preorigin = this.onevesselNAme[0].routess;
    this.selectvessel = this.onevesselNAme[0].name;
    console.log(this.onevesselNAme);
  }

  handleFormChanges() {
    this.consignee.valueChanges.subscribe(
    status => {
      console.log(status+" status change ");
    }
  )
}

onselectClient(ClientObj, data: Shipper_master) {
  if (ClientObj.ClientId != 0) {
    this.expaddress = data.address1+" "+data.address2+" "+data.address3;
    this.modelTemp = ClientObj;
    this.exportref = ClientObj;
    console.log(this.modelTemp +" models ");
  }
  else {
    return false;
  }
}

onsubmit(value: NewBooking){
  //console.log(value.shipper);
  value.shipper=value.shipper.name;
  console.log(value);
  this._router.navigateByUrl('generatebl/'+this.ids);
  // this._bookingService.addBooking(value).subscribe(data => {
  //   this.newBooking = data;
  //   if (this.newBooking.id != null) {
  //     this.msg = "Saved Successfully with id : "+this.newBooking.id;
  //     this.alerts = 'alert alert-success';
  //     this.regularForms.disable();
  //   } else {
  //     this.msg = "Not Saved ";
  //     this.alerts = 'alrert alert-danger';
  //   }
  // })
}

onSelectVessel(event: Vessel_Master){
  this.selectvessel = event.id;
  console.log(event.name);
  this.onevesselNAme = this.vesselname.filter(datas => datas.id == this.selectvessel);
  this.preorigin = this.onevesselNAme[0].routess;
  this.selectvessel = this.onevesselNAme[0].name;
  console.log(this.onevesselNAme);
}

formatter1 = (x: { name: string }) => {
  this.modelTemp = x.name;
  this.exportref = x.name;
  console.log(this.modelTemp);
  console.log(x.name+" is name ");
  this.names = this.modelTemp;
  return  x.name;
};

// Flag search
searchFlags = (text$: Observable<string>) =>
  text$.pipe(
  debounceTime(200),
  map(term => term === '' ? [] : this.sk(term))
);

sk(v){
  this._shipperMasterService.getShipperNameLike(v).subscribe(data => {
  this.statesWithFlagss = data;
  })
  return this.statesWithFlagss
}

onChange(event: Consignee_master) {
  console.log(event.name);
}

// onChangeCommudity( event: Commudity ) {
//   console.log(event.product_name);
//   this.commudityDetails = event.product_discribtion;
// }

notifyParty(event: NotifyMaster){
  console.log(event.address);
  this.notifyPartyAddress = event.address;
}


findPort(event){
  console.log(event);
  console.log(this.coutryOrigins);
}

}

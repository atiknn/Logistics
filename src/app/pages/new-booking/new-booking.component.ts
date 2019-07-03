import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, map   } from 'rxjs/operators';
import { ShipperMasterService } from 'app/shared/services/ShipperMaster.service';
import { Shipper_master } from 'app/shared/model/shipper.model';
import { Consignee_master } from 'app/shared/model/consignee.model';
import { ConsigneeMasterService } from 'app/shared/services/ConsigneeMaster.service';
import { VesselMasterService } from 'app/shared/services/VesselMaster.service';
import { Vessel_Master } from 'app/shared/model/Vessel.model';
import { ports } from 'app/shared/model/ports.model';
import { AgentMasterService } from 'app/shared/services/AgentMaster.service';
import { Agents } from 'app/shared/model/AddAgent.model';
import { NotifyMasterService } from 'app/shared/services/NotifyMaster.service';
import { NotifyMaster } from 'app/shared/model/notifymaster.model';
import * as userData from '../../shared/esentials/datasEsentials';
import { Commudity } from 'app/shared/model/Commudity.model';
import { CommudityService } from 'app/shared/services/Commudity.service';
import { PortsData } from 'app/shared/model/PortsData.model';
import { NewBooking } from 'app/shared/model/NewBooking.model';
import { BookingMasterService } from 'app/shared/services/BookingMaster.service';
import { commudityDiscription } from 'app/shared/model/CommudityDiscription.model';



@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss'],
  providers: [DatePipe]
})


export class NewBookingComponent implements OnInit {

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
  catecommudity: Commudity[];
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
  finalCommudity: Commudity[];
  shippermaster: Shipper_master[];
  newBooking: NewBooking;
  notifyPartyAddress: string;
  commudity: commudityDiscription[];
  randomnumber;
  containerno;
  chars;
  sealNo;
  marksNo;
  coutryOrigins;
  subValues;
  consigneeName;
  consigneeAddress;
  productname;

  constructor(private datePipe: DatePipe, 
    private fb: FormBuilder, 
    private _agentmaster: AgentMasterService,
    private _vesselmaster: VesselMasterService,
    private _consignee: ConsigneeMasterService,
    private _shipperMasterService: ShipperMasterService,
    private _notifyService: NotifyMasterService,
    private _commudityService: CommudityService,
    private _bookingService: BookingMasterService,
    private _shipperService: ShipperMasterService
    ) { }
    
    queryFields: FormControl = new FormControl();

  ngOnInit() {
    this._shipperMasterService.getAllShipper().subscribe(data => {
      this.shippermaster = data});

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

    this.randomnumber = this.datePipe.transform(userData.getDate(), "yyMMddHHmmss")
    this.randomnumber = "HHP"+this.randomnumber;
    //waits(1000);
    this.containerno = this.datePipe.transform(userData.getDate(), "MMddss")
    this.chars = userData.getChars(+this.datePipe.transform(userData.getDate(), "ss"))
    this.containerno = "HH"+this.chars+this.containerno;

    this.sealNo = this.datePipe.transform(userData.getDate(), "HHmmss")
    this.chars = userData.getChars(+this.datePipe.transform(userData.getDate(), "mm"))
    this.sealNo = "HS"+this.chars+this.sealNo;

    this.marksNo =  this.datePipe.transform(userData.getDate(), "yymmss")
    this.chars = userData.getChars(+this.datePipe.transform(userData.getDate(), "ss"))
    this.marksNo = "HM"+this.chars+this.marksNo;

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
    this.queryFields.valueChanges.subscribe( result => console.log(result));
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
    this._bookingService.addBooking(value).subscribe(data => {
      this.newBooking = data;
      if (this.newBooking.id != null) {
        this.msg = "Saved Successfully with id : "+this.newBooking.id;
        this.alerts = 'alert alert-success';
        this.regularForms.disable();
      } else {
        this.msg = "Not Saved ";
        this.alerts = 'alrert alert-danger';
      }
    })
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
    this.consigneeName = event.name;
    this.consigneeAddress = event.address1+' '+event.address2+' '+event.address3;
  }

/////////////////////////////////////////////////////////////////
  onChangeCommudity( event: Commudity ) {
    this.productname = event.product_name;
    this.catecommudity = this.commudityMaster.filter(data => data.product_name == this.productname);
    this.commudity = this.catecommudity[0].catAndDiscription;
  }

  onCategory(event: commudityDiscription){
    this.commudityDetails = event.product_discribtion;
  }
//////////////////////////////////////////////////////////////
  notifyParty(event: NotifyMaster){
    console.log(event.address);
    this.notifyPartyAddress = event.address;
  }

  onChangeShipper(event: Shipper_master){
    this.expaddress = event.address1+" "+event.address2+" "+event.address3;
      this.modelTemp = event.name;
  }


  findPort(event){
    console.log(event);
    console.log(this.coutryOrigins);
  }






}

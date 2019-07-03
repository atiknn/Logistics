import { JwtHelperService } from '@auth0/angular-jwt';
import { decodes } from '../model/decodes';

export function getIds(){
  let token = JSON.parse(localStorage.getItem("currentUser"));
  let helper = new JwtHelperService();
  let decode: decodes = helper.decodeToken(token);
  console.log(decode.msg.id);
  return decode.msg.id;
}

export function getRole(){
  let token = JSON.parse(localStorage.getItem("currentUser"));
  let helper = new JwtHelperService();
  let decode: decodes = helper.decodeToken(token);
  return decode.msg.role;
}

export function getName(){
  // let data:Register = JSON.parse(localStorage.getItem("userData"));
  // return data.name;
  let token = JSON.parse(localStorage.getItem("currentUser"));
  let helper = new JwtHelperService();
  let decode: decodes = helper.decodeToken(token);
  return decode.msg.name;
}

export function getbranch(){
  let token = JSON.parse(localStorage.getItem("currentUser"));
  let helper = new JwtHelperService();
  let decode: decodes = helper.decodeToken(token);
  return decode.msg.branch_id;
}

export function getDate(){
  let today: number  = Date.now();
  console.log(today);
  return today;
}

export function getChars(value: number){
  console.log("values is get getChars "+ value);
  if( value === 1) {return "AZ"}
else if( value === 2) {return "BY"}
else if( value === 3) {return "CX"}
else if( value === 4) {return "DW"}
else if( value === 5) {return "EV"}
else if( value === 6) {return "FU"}
else if( value === 7) {return "GT"}
else if( value === 8) {return "HS"}
else if( value === 9) {return "IR"}
else if( value === 10) {return "JQ"}
else if( value === 11) {return "KP"}
else if( value === 12) {return "LO"}
else if( value === 13) {return "MN"}
else if( value === 14) {return "NM"}
else if( value === 15) {return "OL"}
else if( value === 16) {return "PK"}
else if( value === 17) {return "QJ"}
else if( value === 18) {return "RI"}
else if( value === 19) {return "SH"}
else if( value === 20) {return "TG"}
else if( value === 21) {return "UF"}
else if( value === 22) {return "VE"}
else if( value === 23) {return "WD"}
else if( value === 24) {return "XC"}
else if( value === 25) {return "YB"}
else if( value === 26) {return "ZA"}
else if( value === 27) {return "AE"}
else if( value === 28) {return "BD"}
else if( value === 29) {return "CC"}
else if( value === 30) {return "DB"}
else if( value === 31) {return "EA"}
else  if( value === 32){ return "AZ"}
else if( value === 33){ return "BY"}
else if( value === 34){ return "CX"}
else if( value === 35){ return "DW"}
else if( value === 36){ return "EV"}
else if( value === 37){ return "FU"}
else if( value === 38){ return "GT"}
else if( value === 39){ return "HS"}
else if( value === 40){ return "IR"}
else if( value === 41){ return "JQ"}
else if( value === 42){ return "KP"}
else if( value === 43){ return "LO"}
else  if( value === 44){ return "MN"}
else if( value === 45){ return "NM"}
else if( value === 46){ return "OL"}
else if( value === 47){ return "PK"}
else if  ( value === 48){ return "QJ"}
else if( value === 49){ return "RI"}
else if( value === 50){ return "SH"}
else if( value === 51){ return "TG"}
else if( value === 52){ return "UF"}
else if( value === 53){ return "VE"}
else if( value === 54){ return "WD"}
else if( value === 55){ return "XC"}
else if( value === 56){ return "YB"}
else if( value === 57){ return "ZA"}
else if( value === 58){ return "RV"}
else if( value === 59){ return "VR"}
else if( value === 60){ return "FY"}
}




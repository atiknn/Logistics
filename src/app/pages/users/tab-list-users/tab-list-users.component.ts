import { Component, OnInit } from '@angular/core';
import { Register } from 'app/shared/model/register.model';
import { UserManagementsService } from 'app/shared/services/users.service';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-list-users',
  templateUrl: './tab-list-users.component.html',
  styleUrls: ['./tab-list-users.component.scss']
})
export class TabListUsersComponent implements OnInit {

  allusers: Register[];
  users: Register;
  datas: boolean = true;
  buttnValue: string = "ShowData";
  constructor(private _userManagements: UserManagementsService, private _router: Router) { }

  ngOnInit() {
    this._userManagements.getAllUsers().subscribe(data => {this.allusers = data});
  }


  hidden(){
    if(this.datas === true){
      this.buttnValue = "show Data";
      console.log("sk");
      this.datas = false;
    }else{
      this.datas = true;
      this.buttnValue = "hide Data";
    }
  }

  deleteuser(id){
    console.log(id);
    this._userManagements.deleteUsers(id).subscribe(data => {
      this.users = data;
      console.log('nagivating ');
      this._userManagements.getAllUsers().subscribe(data => {this.allusers = data});
      //this._router.navigateByUrl('/users');
    });
  }

  showUser(id){
    this._router.navigateByUrl('/edituser/'+id);
  }


}

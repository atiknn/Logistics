import { Component, OnInit } from '@angular/core';
import { UserManagementsService } from 'app/shared/services/users.service';
import { Register } from 'app/shared/model/register.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  allusers: Register[];
  constructor(private _userManagements: UserManagementsService) { }

  ngOnInit() {
    this._userManagements.getAllUsers().subscribe(data => {this.allusers = data});
  }

}

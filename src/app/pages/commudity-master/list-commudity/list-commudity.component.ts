import { Component, OnInit } from '@angular/core';
import { CommudityService } from 'app/shared/services/Commudity.service';
import { Commudity } from 'app/shared/model/Commudity.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-commudity',
  templateUrl: './list-commudity.component.html',
  styleUrls: ['./list-commudity.component.scss']
})
export class ListCommudityComponent implements OnInit {

  listsearch;
  commuditys: Commudity[];
  commudity: Commudity;
  constructor(
    private _commudityservice: CommudityService,
    private _routing: Router) { }

  ngOnInit() {
    this._commudityservice.getCommudity().subscribe( data => {
      this.commuditys = data;
    })
  }

  deleteagents(id) {
    this._commudityservice.deleteCommudity(id).subscribe(data => {
      this.commudity = data;
      this._commudityservice.getCommudity().subscribe( data => {
        this.commuditys = data;
      })
    })
  }

  editCommudity(id) {
    this._routing.navigateByUrl('/edit-commudity-master/'+id);
  }

}

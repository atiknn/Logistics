import { Component, OnInit } from '@angular/core';
import { NotifyMaster } from 'app/shared/model/notifymaster.model';
import { NotifyMasterService } from 'app/shared/services/NotifyMaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-notify-party',
  templateUrl: './list-notify-party.component.html',
  styleUrls: ['./list-notify-party.component.scss']
})
export class ListNotifyPartyComponent implements OnInit {

  listsearch;
  notifyAgents: NotifyMaster[];
  notifyAgent: NotifyMaster;
  constructor(private _notifyMasterService: NotifyMasterService,
    private _router: Router
    ) { }

  ngOnInit() {
    this._notifyMasterService.getAllNotifyMaster().subscribe(data => {
      this.notifyAgents = data
    })
  }

  deleteagents(id) {
    console.log(id);
    this._notifyMasterService.deleteNotifyAgents(id).subscribe(data => {
      this.notifyAgent = data;
      this._notifyMasterService.getAllNotifyMaster().subscribe(data => {
        this.notifyAgents = data
      })
    })
  }

  editAgent(id){
    this._router.navigateByUrl('/edit-notify-party/'+id);
  }

}

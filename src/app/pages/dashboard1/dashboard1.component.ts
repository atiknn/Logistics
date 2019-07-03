import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";
import { dashboardService } from 'app/shared/services/DashboardMaster.service';
import { dashBoard } from 'app/shared/model/dashBoard.model';

declare var require: any;


@Component({
    selector: 'app-dashboard1',
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.scss']
})

export class Dashboard1Component {

    dashboard: dashBoard;

    constructor(private _dashboardService: dashboardService) {
        
    }

    ngOnInit() {
        this._dashboardService.getDashBoard().subscribe(arg => this.dashboard = arg);
    }

}

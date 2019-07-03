import {Pipe,PipeTransform} from '@angular/core';
import { Shipper_master } from '../../shared/model/shipper.model';
import { NotifyMaster } from 'app/shared/model/notifymaster.model';
import { Consignee_master } from 'app/shared/model/consignee.model';
import { Agents } from 'app/shared/model/AddAgent.model';


@Pipe({
    name:'agentFilter'
})

export class agentpipe implements PipeTransform{

   transform(value: Agents[],filterby:string):Agents[]
     {
          if(!value){
              return [];
          }
          if(!filterby) {
              return value;
          }
         filterby = filterby.toLocaleLowerCase();
         return filterby ? value.filter((pro:Agents) => pro.name.toLocaleLowerCase().includes(filterby)):value;
     }

}
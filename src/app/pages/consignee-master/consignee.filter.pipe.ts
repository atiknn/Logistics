import {Pipe,PipeTransform} from '@angular/core';
import { Shipper_master } from '../../shared/model/shipper.model';
import { NotifyMaster } from 'app/shared/model/notifymaster.model';
import { Consignee_master } from 'app/shared/model/consignee.model';


@Pipe({
    name:'consigneeFilter'
})

export class consigneepipe implements PipeTransform{

   transform(value:Consignee_master[],filterby:string):Consignee_master[]
     {
          if(!value){
              return [];
          }
          if(!filterby) {
              return value;
          }
         filterby = filterby.toLocaleLowerCase();
         return filterby ? value.filter((pro:Consignee_master) => pro.name.toLocaleLowerCase().includes(filterby)):value;
     }

}
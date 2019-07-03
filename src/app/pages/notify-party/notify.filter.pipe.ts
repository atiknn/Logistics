import {Pipe,PipeTransform} from '@angular/core';
import { Shipper_master } from '../../shared/model/shipper.model';
import { NotifyMaster } from 'app/shared/model/notifymaster.model';


@Pipe({
    name:'notifyPartyFilter'
})

export class notifyPartypipe implements PipeTransform{

   transform(value:NotifyMaster[],filterby:string):NotifyMaster[]
     {
          if(!value){
              return [];
          }
          if(!filterby) {
              return value;
          }
         filterby = filterby.toLocaleLowerCase();
         return filterby ? value.filter((pro:NotifyMaster) => pro.name.toLocaleLowerCase().includes(filterby)):value;
     }

}
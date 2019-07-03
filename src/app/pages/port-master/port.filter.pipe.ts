import {Pipe,PipeTransform} from '@angular/core';
import { Shipper_master } from '../../shared/model/shipper.model';
import { PortsData } from 'app/shared/model/PortsData.model';


@Pipe({
    name:'ProductFilter'
})

export class portProduct implements PipeTransform{

   transform(value:PortsData[],filterby:string):PortsData[]
     {
          if(!value){
              return [];
          }
          if(!filterby) {
              return value;
          }
         filterby = filterby.toLocaleLowerCase();
         return filterby ? value.filter((pro:PortsData) => pro.PortName.toLocaleLowerCase().includes(filterby)):value;
     }

}
import {Pipe,PipeTransform} from '@angular/core';
import { Shipper_master } from '../../shared/model/shipper.model';


@Pipe({
    name:'ProductFilter'
})

export class FilterProduct implements PipeTransform{

   transform(value:Shipper_master[],filterby:string):Shipper_master[]
     {
          if(!value){
              return [];
          }
          if(!filterby) {
              return value;
          }
         filterby = filterby.toLocaleLowerCase();
         return filterby ? value.filter((pro:Shipper_master) => pro.name.toLocaleLowerCase().includes(filterby)):value;
     }

}
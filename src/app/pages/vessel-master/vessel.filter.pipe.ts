import {Pipe,PipeTransform} from '@angular/core';
import { Vessel_Master } from 'app/shared/model/Vessel.model';


@Pipe({
    name:'vesselFilter'
})

export class vesselpipe implements PipeTransform{

   transform(value: Vessel_Master[],filterby:string):Vessel_Master[]
     {
          if(!value){
              return [];
          }
          if(!filterby) {
              return value;
          }
         filterby = filterby.toLocaleLowerCase();
         return filterby ? value.filter((pro:Vessel_Master) => pro.name.toLocaleLowerCase().includes(filterby)):value;
     }

}
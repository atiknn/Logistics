import {Pipe,PipeTransform} from '@angular/core';
import { NewBooking } from 'app/shared/model/NewBooking.model';


@Pipe({
    name:'bookingFilter'
})

export class bookingpipe implements PipeTransform{

   transform(value: NewBooking[],filterby:string):NewBooking[]
     {
          if(!value){
              return [];
          }
          if(!filterby) {
              return value;
          }
         filterby = filterby.toLocaleLowerCase();
         return filterby ? value.filter((pro:NewBooking) => pro.shipper.toLocaleLowerCase().includes(filterby)):value;
     }

}
import {Pipe,PipeTransform} from '@angular/core';
import { Commudity } from 'app/shared/model/Commudity.model';


@Pipe({
    name:'commudityFilter'
})

export class commuditypipe implements PipeTransform{

   transform(value: Commudity[],filterby:string):Commudity[]
     {
          if(!value){
              return [];
          }
          if(!filterby) {
              return value;
          }
         filterby = filterby.toLocaleLowerCase();
         return filterby ? value.filter((pro:Commudity) => pro.product_name.toLocaleLowerCase().includes(filterby)):value;
     }

}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],propname:string): any[] {
    const result:any=[];
    if(!value || propname=="All"){
      return value
    }
    else if (propname == 'Asia') {
      value.forEach((a: any) => {
        if (a.region == 'Asia') {
          result.push(a);
        }
      });
    }
    else {
      value.forEach((a: any) => {
        if (a.region == 'Europe') {
          result.push(a);
        } 
      });
    }
  
    return result;
  }

}

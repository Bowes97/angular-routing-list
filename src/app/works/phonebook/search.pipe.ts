import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from './phonebook.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<IPerson>, person: string): Array<IPerson> {
    if(!person){
      return value;
    }
    if(!value){
      return [];
    }
    return value.filter(name => JSON.stringify(name).toLowerCase().includes(person.toLowerCase()))
  }

}

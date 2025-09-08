import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe',
  standalone: false
})
export class MypipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {   //Reusale Modular Fxn and can take infinite arguments in future we can update it and it takes the array of any size to take parameters
    return null;
  }

}

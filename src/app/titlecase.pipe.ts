import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase',
})
export class TitlecasePipe implements PipeTransform {
  transform(value: string, cantDecimal = 6): any {
    // //first i split whole the line after space and store it in to the val constant
    // const val = value.split(' ')

    // //then make a loop with that val constant
    // for(let i = 0; i < val.length; i++){

    //   //then store that loop in to the pic constant
    //   const pic = val[i];

    //   //then i'll convert that words first latte in to in to the uppercase
    //   const title =pic.charAt(0).toUpperCase();

    //   //then i fetch the latters after the 1st and convert that all in to the lowercase
    //   val[i] = title + val[i].substr(1).toLowerCase();
    // }
    // //then join all the words again with the space
    // return val.join(' ');

    if (!value) {
      return '';
    }
    let record = String(value);
    if (record.length < cantDecimal) {
      return record;
    }
    const cant = record.length;
    let cad = record.substring(cant - cantDecimal, cant);
    // for (let i = cant; i > cad.length; i--) {
    //   const element = cad.charAt(i);
    //   console.log('ELEMENTO ', element);
    // }

    console.log('CADENA -', cad);

    return value;
  }
}

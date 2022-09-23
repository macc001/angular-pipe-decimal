import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase',
})
export class TitlecasePipe implements PipeTransform {
  transform(value: string, cantDecimal = 6): any {
    if (!value) {
      return '';
    }
    let record = String(value);
    if (record.length < cantDecimal) {
      return record;
    }
    const cant = record.length;
    let cad = record.substring(cant - cantDecimal, cant);
    let isDiferentCero = false;
    for (let i = cad.length - 1; i >= 2; i--) {
      const element = cad.charAt(i);
      if (element !== '0') {
        isDiferentCero = true;
        break;
      }
    }
    if (isDiferentCero) {
      return value;
    } else {
      for (let i = cad.length - 5; i >= 0; i--) {
        const element = cad.charAt(i);
        if (element !== '0') {
          let newValue = record.substring(0, cant - (cantDecimal - 2));
          return newValue;
        }
      }
    }
    return record.substring(0, cant - cantDecimal);
  }
}

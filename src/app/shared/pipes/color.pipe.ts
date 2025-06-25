import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 80) {
      return '#55BF3B';
    } else if (value <= 60) {
      return '#DF5353';
    }
    return '#DDDF0D';
  }
}

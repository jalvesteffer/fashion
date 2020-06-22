import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productSort'
})
export class ProductSortPipe implements PipeTransform {

  transform(input: any[]): any {
    if (input) {
      return input.sort((a, b) => {
        let an1: string = a.productrName.toLowerCase();
        let an2: string = b.productName.toLowerCase();
        return an1 < an2 ? -1 : an1 > an2 ? 1 : 0;
      });
    }
  }

}

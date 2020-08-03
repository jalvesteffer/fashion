import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subcategorySort'
})
export class SubcategorySortPipe implements PipeTransform {

  transform(input: any[]): any {
    if (input) {
      return input.sort((a, b) => {
        let an1: string = a.subcatName.toLowerCase();
        let an2: string = b.subcatName.toLowerCase();
        return an1 < an2 ? -1 : an1 > an2 ? 1 : 0;
      });
    }
  }

}

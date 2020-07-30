import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorySort'
})
export class CategorySortPipe implements PipeTransform {

  transform(input: any[]): any {
    if (input) {
      return input.sort((a, b) => {
        let an1: string = a.catName.toLowerCase();
        let an2: string = b.catName.toLowerCase();
        return an1 < an2 ? -1 : an1 > an2 ? 1 : 0;
      });
    }
  }

}

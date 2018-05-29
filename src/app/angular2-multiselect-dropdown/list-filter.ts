import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'listFilter',
    pure: false
})
export class ListFilterPipe implements PipeTransform {
    transform(items: any[], filter: any, searchBy: any): any[] {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item: any) => this.applyFilter(item, filter, searchBy));
    }
    applyFilter(item: any, filter: any, searchBy: any): boolean {
        let found = false;
        if (searchBy.length > 0) {
            for (let t = 0; t < searchBy.length; t++) {
                if (filter && item[searchBy[t]] && item[searchBy[t]] !== '') {
                    if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                        found = true;
                    }
                }
            }

        } else {
            for (const prop in item) {
                if (filter && item[prop]) {
                    if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                        found = true;
                    }
                }
            }
        }

        return found;
    }
}

import { Injectable } from "@angular/core";

export class PagerService {
  constructor() { }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number) {
    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);
    console.log("this is" + totalPages)
    let startPage: number, endPage: number;
    if (totalPages <= pageSize) {
      // less than pageSize total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than pageSize total pages so calculate start and end pages
      if (currentPage <= ((pageSize / 2) + 1)) {
        startPage = 1;
        endPage = pageSize;
      } else if (currentPage + ((pageSize / 2) - 1) >= totalPages) {
        startPage = totalPages - (pageSize - 1);
        endPage = totalPages;
      } else {
        startPage = currentPage - (pageSize / 2);
        endPage = currentPage + ((pageSize / 2) - 1);
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    console.log("this is startPage" + startPage)
    console.log("this is endPage" + endPage)
    console.log("this is startIndex" + startIndex)
    console.log("this is endIndex" + endIndex)
    // create an array of pages to ng-repeat in the pager control
    const pages = Array.from(
      Array(endPage + 1 - startPage),
      (_, i) => startPage + i
    );
    console.log("this is pages" + pages)
    console.log("this is currentPage" + currentPage)
    console.log("this is totalPages" + totalPages)
    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './views/view.html'
})
export class BasicExample implements OnInit {

    itemList = [];
    selectedItems = [];
    settings = {};

    constructor() { }
    ngOnInit() {

        this.itemList = [
            { 'id': 1, 'data': { 'itemName': 'India' } },
            { 'id': 2, 'data': { 'itemName': 'Singapore' } },
            { 'id': 3, 'data': { 'itemName': 'Australia' } },
            { 'id': 4, 'data': { 'itemName': 'Canada' } },
            { 'id': 5, 'data': { 'itemName': 'South Korea' } },
            { 'id': 6, 'data': { 'itemName': 'Brazil' } }
        ];

        this.selectedItems = [
            { 'id': 1, 'data': { 'itemName': 'India' } },
            { 'id': 2, 'data': { 'itemName': 'Singapore' } },
            { 'id': 3, 'data': { 'itemName': 'Australia' } },
            { 'id': 4, 'data': { 'itemName': 'Canada' } }
        ];

        this.settings = {
            text: 'Select Countries',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: 'myclass custom-class',
            primaryKey: 'id',
            labelKey: 'data.itemName'
        };
    }

    onItemSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any) {
        console.log(items);
    }
    onDeSelectAll(items: any) {
        console.log(items);
    }
    cssgist: boolean = false;
    title: string = 'Basic example';
    tsgist: string = 'AmolBorse/181e799462ae00549ddceef3652f0eea';
    htmlgist: string = 'CuppaLabs/eb78d42ab7971fda6493586e329bfdb8';
    tstitle: string = 'basic.ts'
    htmltitle: string = 'basic.html';
}

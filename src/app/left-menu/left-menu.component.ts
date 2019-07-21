import { Component, OnInit } from '@angular/core';
import { MenuSystem } from '../models/menuSystem';
import { menuData } from '../menuData.mock';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  public menuData: Array<MenuSystem>;
  public mouseEnterIndex: number;
  public mouseLeave: boolean;
  public showMouseOverText: boolean;

  constructor() {
    this.menuData = menuData;
    console.log(this.menuData);
  }

  ngOnInit() {
  }

  onMouseOver(index: number): void {
    this.mouseEnterIndex = index;
    this.showMouseOverText = true;
  }

  onMouseLeave(): void {
    this.showMouseOverText = false;
  }
}

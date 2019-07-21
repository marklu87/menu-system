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

  constructor() {
    this.menuData = menuData;
    console.log(this.menuData);
  }

  ngOnInit() {
  }

}

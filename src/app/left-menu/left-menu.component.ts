import { Component, OnInit } from '@angular/core';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { MenuSystem } from '../models/menuSystem';
import { menuData } from '../menuData.mock';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  public faBox: any = faBox;
  private menuData: Array<MenuSystem>;

  constructor() {
    this.menuData = menuData;
    console.log(this.menuData);
  }

  ngOnInit() {
  }

}

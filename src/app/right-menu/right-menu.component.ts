import { Component, OnInit } from '@angular/core';
import { MenuSystem } from '../models/menuSystem';
import { menuData } from '../rightMenuData.mock';
import { MenuService } from '../menuService.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.scss']
})
export class RightMenuComponent implements OnInit {
  public menuData: Array<MenuSystem>;
  public mouseEnterIndex: number;
  public mouseLeave: boolean;
  public showMouseOverText: boolean;

  constructor(private menuService: MenuService) {
    this.menuData = menuData;
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

  onMouseClick(index: number): void {
    this.menuService.udpateMenuDataObl(this.menuData[index]);
  }
}

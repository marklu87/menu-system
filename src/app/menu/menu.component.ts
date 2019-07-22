import { Component, OnInit } from '@angular/core';
import { MenuSystem } from '../models/menuSystem';
import { menuDataLeft } from '../leftMenuData.mock';
import { menuDataRight } from '../rightMenuData.mock';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menuDataDisplay: any;
  public menuDataLeft: Array<MenuSystem>;
  public menuDataRight: Array<MenuSystem>;
  public mouseEnterIndex: number;
  public mouseLeave: boolean;
  public showMouseOverText: boolean;
  public position: string;

  constructor() {
    this.menuDataLeft = menuDataLeft;
    this.menuDataRight = menuDataRight;
  }

  ngOnInit() {
  }

  onMouseEnter(index: number, position: string): void {
    this.position = position;
    this.mouseEnterIndex = index;
    this.showMouseOverText = true;
  }

  onMouseLeave(): void {
    this.showMouseOverText = false;
  }

  onMouseClick(data): void {
    this.menuDataDisplay = data;
  }
}

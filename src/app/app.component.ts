import { Component } from '@angular/core';
import { MenuSystem } from './models/menuSystem';
import { menuDataLeft } from './leftMenuData.mock';
import { menuDataRight } from './rightMenuData.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menu-system';
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

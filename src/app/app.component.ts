import { Component } from '@angular/core';
import { MenuService } from './menuService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'menu-system';
  public menuData: any;

  constructor(private menuService: MenuService) {
    this.menuService.menuDataObl().subscribe(res => {
      if (res) {
        this.menuData = res;
      }
    })
  }
}

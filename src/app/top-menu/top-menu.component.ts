import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  public faCog: any = faCog;
  public projectTitle: string;

  constructor() {
    // In the future, this could be made more dynamic
    this.projectTitle = 'This Is My Awesome Demo';
  }

  ngOnInit() {
  }

}

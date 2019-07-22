import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private mouseOverText: BehaviorSubject<object>;
  private menuIndex: BehaviorSubject<number>;

  constructor() {
    this.mouseOverText = new BehaviorSubject(null);
    this.menuIndex = new BehaviorSubject(null);
  }

  udpateMenuDataObl(data) {
    this.mouseOverText.next(data);
  }

  menuDataObl() {
    return this.mouseOverText;
  }
}
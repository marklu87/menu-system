import { MenuSystem } from './models/menuSystem';
import {
  faFootballBall, faBolt, faBed, faBatteryFull, faBomb, faFrog, faHippo, faPepperHot, faPizzaSlice, faTooth, faTrophy
} from '@fortawesome/free-solid-svg-icons';

export const menuData: Array<MenuSystem> = [
  {
    icon_id: 0,
    iconName: faBomb,
    mouseOverText: 'Bomb',
  },
  {
    icon_id: 1,
    iconName: faBatteryFull,
    mouseOverText: 'Battery Full',
  },
  {
    icon_id: 2,
    iconName: faBed,
    mouseOverText: 'Bed',
  },
  {
    icon_id: 3,
    iconName: faBolt,
    mouseOverText: 'Bolt',
  },
  {
    icon_id: 4,
    iconName: faFootballBall,
    mouseOverText: 'Football',
  },
  {
    icon_id: 5,
    iconName: faFrog,
    mouseOverText: 'Frog',
  },
  {
    icon_id: 6,
    iconName: faHippo,
    mouseOverText: 'Hippo',
  },
  {
    icon_id: 7,
    iconName: faPepperHot,
    mouseOverText: 'Pepper',
  },
  {
    icon_id: 8,
    iconName: faPizzaSlice,
    mouseOverText: 'Pizza',
  },
  {
    icon_id: 9,
    iconName: faTooth,
    mouseOverText: 'Tooth',
  },
  {
    icon_id: 10,
    iconName: faTrophy,
    mouseOverText: 'Trophy',
  },
]
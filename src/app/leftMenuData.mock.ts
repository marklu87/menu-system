import { MenuSystem } from './models/menuSystem';
import {
  faBox, faBreadSlice, faBrain, faCoffee, faCookie, faDragon, faFire, faFlask, faHatWizard, faIceCream, faMeteor,
  faFootballBall, faBolt, faBed, faBatteryFull, faBomb, faFrog, faHippo, faPepperHot, faPizzaSlice, faTooth, faTrophy
} from '@fortawesome/free-solid-svg-icons';

export const menuData: Array<MenuSystem> = [
  {
    icon_id: 0,
    position: 'left',
    iconName: faBox,
    mouseOverText: 'Box',
  },

  {
    icon_id: 1,
    position: 'left',
    iconName: faBreadSlice,
    mouseOverText: 'Bread',

  },
  {
    icon_id: 2,
    position: 'left',
    iconName: faBrain,
    mouseOverText: 'Brain',
  },
  {
    icon_id: 3,
    position: 'left',
    iconName: faCoffee,
    mouseOverText: 'Coffee',
  },
  {
    icon_id: 4,
    position: 'left',
    iconName: faCookie,
    mouseOverText: 'Cookie',
  },
  {
    icon_id: 5,
    position: 'left',
    iconName: faDragon,
    mouseOverText: 'Dragon',
  },
  {
    icon_id: 6,
    position: 'left',
    iconName: faFire,
    mouseOverText: 'Fire',
  },
  {
    icon_id: 7,
    position: 'left',
    iconName: faFlask,
    mouseOverText: 'Flask',
  },
  {
    icon_id: 8,
    position: 'left',
    iconName: faHatWizard,
    mouseOverText: 'Wizard',
  },
  {
    icon_id: 9,
    position: 'left',
    iconName: faIceCream,
    mouseOverText: 'Ice Cream',
  },
  {
    icon_id: 10,
    position: 'left',
    iconName: faMeteor,
    mouseOverText: 'Meteor',
  }
]
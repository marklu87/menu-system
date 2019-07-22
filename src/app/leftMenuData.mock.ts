import { MenuSystem } from './models/menuSystem';
import {
  faBox, faBreadSlice, faBrain, faCoffee, faCookie, faDragon, faFire, faFlask, faHatWizard, faIceCream, faMeteor
} from '@fortawesome/free-solid-svg-icons';

export const menuData: Array<MenuSystem> = [
  {
    icon_id: 0,
    iconName: faBox,
    mouseOverText: 'Box',
  },

  {
    icon_id: 1,
    iconName: faBreadSlice,
    mouseOverText: 'Bread',

  },
  {
    icon_id: 2,
    iconName: faBrain,
    mouseOverText: 'Brain',
  },
  {
    icon_id: 3,
    iconName: faCoffee,
    mouseOverText: 'Coffee',
  },
  {
    icon_id: 4,
    iconName: faCookie,
    mouseOverText: 'Cookie',
  },
  {
    icon_id: 5,
    iconName: faDragon,
    mouseOverText: 'Dragon',
  },
  {
    icon_id: 6,
    iconName: faFire,
    mouseOverText: 'Fire',
  },
  {
    icon_id: 7,
    iconName: faFlask,
    mouseOverText: 'Flask',
  },
  {
    icon_id: 8,
    iconName: faHatWizard,
    mouseOverText: 'Wizard',
  },
  {
    icon_id: 9,
    iconName: faIceCream,
    mouseOverText: 'Ice Cream',
  },
  {
    icon_id: 10,
    iconName: faMeteor,
    mouseOverText: 'Meteor',
  }
]
import images from '../../../res/images';
import {EnableSnapType, TabViewType} from './types';

export default {
  homeConfig: [
    {
      sectionTitle: 'Select your tab view',
      data: [
        {type: TabViewType.tabview, title: 'react-native-tab-view'},
        {type: TabViewType.default, title: 'react-native-scrollable-tab-view'},
      ],
    },
    {
      sectionTitle: 'Select the value of enableSnap in props',
      data: [
        {type: EnableSnapType.disableSnap, title: 'false'},
        {type: EnableSnapType.enableSnap, title: 'true'},
      ],
    },
  ],
  Page1Data: [
    {image: images.i1, title: '深秋的黄昏'},
    {image: images.i2, title: '神秘的庄园'},
  ],
};

import logoCC from '@plone/volto/icons/discussion.svg';
import View from 'volto-comuni-chiamo/Block/View'; // TO DO: da sostituire
import Edit from 'volto-comuni-chiamo/Block/Edit'; // TO DO: da sostituire
// import DefaultRSSTemplate from './Templates/DefaultRssTemplate';
// export { getRSSMixerData } from './actions';

export const comunichiamoBlock = {
  id: 'comunichiamoBlock',
  title: 'Blocco Comuni-Chiamo',
  icon: logoCC,
  group: 'common',
  view: View,
  edit: Edit,
  restricted: false,
  mostUsed: false,
  security: {
    addPermission: [],
    view: [],
  },
  // templates: {
  //   default: { label: 'Default template', template: DefaultRSSTemplate },
  // },
  sidebarTab: 1,
};

export default function applyConfig(config) {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    comunichiamoBlock,
  };

  // config.addonReducers = {
  //   ...config.addonReducers,
  //   rssMixerData,
  // };

  return config;
}

import iconCC from '@plone/volto/icons/discussion.svg';
import View from 'volto-comuni-chiamo/Block/View';
import Edit from 'volto-comuni-chiamo/Block/Edit';

export const comunichiamoBlock = {
  id: 'comunichiamoBlock',
  title: 'Blocco Comuni-Chiamo',
  icon: iconCC,
  group: 'common',
  view: View,
  edit: Edit,
  restricted: false,
  mostUsed: false,
  security: {
    addPermission: [],
    view: [],
  },
  sidebarTab: 1,
};

export default function applyConfig(config) {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    comunichiamoBlock,
  };

  return config;
}

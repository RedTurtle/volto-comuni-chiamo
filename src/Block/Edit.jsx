import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar';

import { getBaseUrl } from '@plone/volto/helpers';

const Edit = ({ data, onChangeBlock, block, selected }) => {
  return (
    <>
      <FormattedMessage
        id="BlockFirstSave"
        defaultMessage="Per vedere il blocco Comuni-Chiamo, devi prima salvare il contenuto."
      >
        {/* {(message) => (
              <div className="public-ui">
                <div className="ui message warning">{message}</div>
              </div>
            )} */}
      </FormattedMessage>

      <SidebarPortal selected={selected}>
        <Sidebar data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </>
  );
};

Edit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  block: PropTypes.string.isRequired,
  onSelectBlock: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.any),
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Edit;

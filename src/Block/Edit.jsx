import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from '@redturtle/volto-comuni-chiamo/Block/Sidebar';

const Edit = ({ data, onChangeBlock, block, selected }) => {
  return (
    <>
      <FormattedMessage
        id="BlockFirstSave"
        defaultMessage="Per vedere il blocco Comuni-Chiamo, devi prima salvare il contenuto e ricaricare la pagina."
      ></FormattedMessage>

      <SidebarPortal selected={selected}>
        <Sidebar data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </>
  );
};

Edit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  selected: PropTypes.bool.isRequired,
  block: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Edit;

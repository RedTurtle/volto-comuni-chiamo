import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components';
import { ColorListWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { CC_PALETTE } from 'volto-comuni-chiamo/Block/colors';
/* STYLE */
import 'volto-comuni-chiamo/Block/sidebar.css';

const messages = defineMessages({
  comuniChiamo: {
    id: 'comuniChiamo',
    defaultMessage: 'Blocco Comuni-Chiamo',
  },
  title: {
    id: 'title',
    defaultMessage: 'Title',
  },
  color: {
    id: 'color',
    defaultMessage: 'Colore widget',
  },
  codColor: {
    id: 'codColor',
    defaultMessage: 'Codice colore personalizzato',
  },
  codColorDescription: {
    id: 'codColorDescription',
    defaultMessage:
      'Inserendo un codice colore personalizzato, vincerà sulla palette predefinita del widget. (es. #0066CC)',
  },
  keyWidget: {
    id: 'keyWidget',
    defaultMessage: 'API-KEY del widget',
  },
  keyWidgetDescription: {
    id: 'keyWidgetDescription',
    defaultMessage: "Inserire l'API-KEY dello script",
  },
  blockFirstSave: {
    id: 'blockFirstSave',
    defaultMessage:
      'Per vedere il blocco Comuni-Chiamo, devi prima salvare il contenuto.',
  },
});

const Sidebar = ({ data, block, onChangeBlock }) => {
  const intl = useIntl();

  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>{intl.formatMessage(messages.comuniChiamo)}</h2>
      </header>

      <Segment className="ui form">
        <TextWidget
          id="title"
          title={intl.formatMessage(messages.title)}
          value={data.title}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value,
            });
          }}
        />
        <TextWidget
          id="keyWidget"
          title={intl.formatMessage(messages.keyWidget)}
          value={data.keyWidget}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value,
            });
          }}
        />
        <ColorListWidget
          id="color"
          title={intl.formatMessage(messages.color)}
          value={data.color || CC_PALETTE[0].name}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          colors={CC_PALETTE}
        />
        <TextWidget
          id="colorWidget"
          title={intl.formatMessage(messages.codColor)}
          description={intl.formatMessage(messages.codColorDescription)}
          value={data.colorWidget}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value,
            });
          }}
        />
      </Segment>
    </Segment.Group>
  );
};

Sidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default Sidebar;

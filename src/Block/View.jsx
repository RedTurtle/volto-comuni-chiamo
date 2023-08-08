import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Helmet } from '@plone/volto/helpers';

const View = ({ data, properties, id, path }) => {
  //console.log('data', data);

  // useEffect(() => {
  //   console.log('render');
  //   comunichiamoScript(data.keyWidget, '');
  //   const script = document.createElement('script');

  //   script.src =
  //     'https://cdn-embed.comuni-chiamo.com/test/0.3.1-beta/js/main.js';
  //   script.async = true;

  //   document.body.appendChild(script);
  // }, []);

  useEffect(() => {
    const ccWidgetReportingConf = {
      targetId: 'comunichiamo',
      apiKey: data.keyWidget,
    };

    window.ccWidgetReportingConf = ccWidgetReportingConf;

    const script = document.createElement('script');

    script.src =
      'https://cdn-embed.comuni-chiamo.com/test/0.3.1-beta/js/main.js';
    script.async = true;

    document.body.appendChild(script);
    return () => {
      delete window.ccWidgetReportingConf;
      document.body.removeChild(script);
    };
  }, [data.keyWidget]);

  return (
    <>
      <div className="block comuni-chiamo">
        <div id="comunichiamo"></div>
      </div>
    </>
  );
};

View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string,
  path: PropTypes.string,
};

export default View;

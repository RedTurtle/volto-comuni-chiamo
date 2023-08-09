import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const View = ({ data, properties, id, path }) => {
  useEffect(() => {
    const ccWidgetReportingConf = {
      targetId: 'comunichiamo',
      apiKey: data.keyWidget,
      ui: {
        primaryColor: data.colorWidget ?? data.color,
      },
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
        {data.title && <h2 className="mb-4">{data.title}</h2>}
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

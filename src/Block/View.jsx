import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CC_PALETTE } from 'volto-comuni-chiamo/Block/colors';

const View = ({ data, properties, id, path }) => {
  const src =
    'https://cdn-embed.comuni-chiamo.com/test/0.4.0-beta/js/main.min.js';

  // src: https://stackoverflow.com/a/28002292
  const getScript = (source, callback) => {
    var script = document.createElement('script');
    var prior = document.getElementsByTagName('script')[0];
    script.async = 1;

    script.onload = script.onreadystatechange = (_, isAbort) => {
      if (
        isAbort ||
        !script.readyState ||
        /loaded|complete/.test(script.readyState)
      ) {
        script.onload = script.onreadystatechange = null;
        script = undefined;
        if (!isAbort) if (callback) callback();
      }
    };

    script.src = source;
    prior.parentNode.insertBefore(script, prior);
  };

  useEffect(() => {
    const checkColor = (color) => {
      const colorSelect = CC_PALETTE.filter((el) => el.name === color);
      return colorSelect[0].code;
    };

    const ccWidgetReportingConf = {
      targetId: 'comunichiamo',
      apiKey: data.keyWidget,
      ui: {
        primaryColor:
          data.colorWidget ?? checkColor(data.color || CC_PALETTE[0].name),
      },
      autoInit: false,
    };
    window.ccWidgetReportingConf = ccWidgetReportingConf;

    getScript(src, () => {
      window.ccWidgetReporting.init();
    });
  }, [data.color, data.colorWidget, data.keyWidget]);

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

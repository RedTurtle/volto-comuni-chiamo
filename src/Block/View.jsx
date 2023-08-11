import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CC_PALETTE } from 'volto-comuni-chiamo/Block/colors';

const View = ({ data, properties, id, path }) => {
  const [scriptLoaded, setScriptLoaded] = React.useState(null);
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn-embed.comuni-chiamo.com/test/0.3.1-beta/js/main.min.js';
    script.async = true;

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
    };
    window.ccWidgetReportingConf = ccWidgetReportingConf;
    document.body.appendChild(script);
    setScriptLoaded(script);

    return () => {
      scriptLoaded && document.body.removeChild(scriptLoaded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="block comuni-chiamo">
      {data.title && <h2 className="mb-4">{data.title}</h2>}
      <div id="comunichiamo"></div>
    </div>
  );
};

View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string,
  path: PropTypes.string,
};

export default View;

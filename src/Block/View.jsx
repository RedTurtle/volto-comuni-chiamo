import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CC_PALETTE } from '@redturtle/volto-comuni-chiamo/Block/colors';

const checkColor = (color) => {
  const colorSelect = CC_PALETTE.filter((el) => el.name === color);
  return colorSelect[0].code;
};

const SCRIPT_ID = 'comuni-chiamo-script';
const WIDGET_ID = 'comunichiamo';

const View = ({ data, properties, id, path }) => {
  const src =
    'https://cdn-embed.comuni-chiamo.com/prod/v1/latest/js/main.min.js';

  // src: https://stackoverflow.com/a/28002292
  const getScript = (source, callback) => {
    if (document.getElementById(SCRIPT_ID)) {
      if (callback) callback();
      return;
    }

    let script = document.createElement('script');
    const prior = document.getElementsByTagName('script')[0];
    script.async = 1;
    script.id = SCRIPT_ID;

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
    const ccWidgetReportingConf = {
      targetId: WIDGET_ID,
      apiKey: data.keyWidget,
      ui: {
        primaryColor:
          data.colorWidget ?? checkColor(data.color || CC_PALETTE[0].name),
      },
      labels: {
        auth: {
          title: data.labelsAuthTitle,
          subtitle: data.labelsAuthSubtitle,
          formTitle: data.labelsAuthFormTitle,
        },
      },
      autoInit: false,
    };
    window.ccWidgetReportingConf = ccWidgetReportingConf;

    getScript(src, () => {
      const widget = document.getElementById(WIDGET_ID);
      if (
        widget &&
        widget.getAttribute('data-loaded') !== 'true' &&
        window.ccWidgetReporting
      ) {
        widget.setAttribute('data-loaded', 'true');
        window.ccWidgetReporting.init();
      }
    });
  }, [
    data.color,
    data.colorWidget,
    data.keyWidget,
    data.labelsAuthTitle,
    data.labelsAuthSubtitle,
    data.labelsAuthFormTitle,
  ]);

  return (
    <div className="block comuni-chiamo">
      {data.title && <h2 className="mb-4">{data.title}</h2>}
      <div id={WIDGET_ID}></div>
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

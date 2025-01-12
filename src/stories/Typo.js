import React from 'react';

import PropTypes from 'prop-types';


export const Typo = ({ size, bold, children }) => {
  const style = {
    fontSize: size,
    fontWeight: bold ? 'bold' : 'normal'
  }

  return <span style={style}>{children}</span>
};

Typo.propTypes = {
    size: PropTypes.string.isRequired,
    bold: PropTypes.bool,
    children: PropTypes.node.isRequired
};

Typo.defaultProps = {
  bold: false,
};

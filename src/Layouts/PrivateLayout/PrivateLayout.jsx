import React from 'react';
import PropTypes from 'prop-types';
import { theme } from '../../theme';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const PrivateLayout = ({ children }) => (
  <div>
    <div />
    <div style={{ margin: theme.spacing.unit * 2 }}>
      {children}
    </div>
  </div>
);

PrivateLayout.propTypes = propTypes;
export default PrivateLayout;

import React from 'react';
import PropTypes from 'prop-types';

const ActionAlertOn = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      width="24"
      height="24"
      className="dbx-icon"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11.998 2c.54 0 .986.446.986 1.01v1.08l.024-.001c3.076.493 4.978 3.146 4.978 7.09l.024 2.816c0 1.831.516 2.512 1.526 3.17.376.234.54.704.423 1.126a1.007 1.007 0 01-.963.704h-3.734c-.14 1.667-1.55 3.005-3.24 3.005a3.253 3.253 0 01-3.241-3.005H5c-.447 0-.823-.281-.964-.704a1.014 1.014 0 01.423-1.127c1.033-.68 1.526-1.314 1.526-3.169v-2.817c0-3.967 1.95-6.643 5.002-7.112V3.009c0-.563.446-1.009 1.01-1.009zm1.245 16.995H10.8c.118.564.61.986 1.222.986.587 0 1.08-.422 1.22-.986z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionAlertOn.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionAlertOn.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionAlertOn;

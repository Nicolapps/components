import * as React from 'react';
import PropTypes from 'prop-types';

const SvgTaxi = ({ title, titleId, ...props }, svgRef) => (
  <svg
    viewBox="0 0 24 24"
    className="dbx-icon"
    width="24"
    height="24"
    ref={svgRef}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M5 13v3c0 .6.4 1 1 1v1.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V17h8v1.5c0 .3.2.5.5.5h1c.3 0 .5-.2.5-.5V17c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1l-.7-3.4c-.2-.9-1-1.6-2-1.6H15V6c0-.6-.4-1-1-1h-3.7c-.6 0-1 .4-1 1v1h-.7c-1 0-1.8.7-2 1.6L6 12c-.6 0-1 .4-1 1zm11 2c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zM7.7 8.8c.1-.5.5-.8.9-.8h6.7c.5 0 .9.3 1 .8L17 12H7l.7-3.2zM8 13c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
      fill="currentColor"
    />
  </svg>
);

SvgTaxi.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
SvgTaxi.defaultProps = {
  title: null,
  titleId: null,
};
const ForwardRef = React.forwardRef(SvgTaxi);
const MemoForwardRef = React.memo(ForwardRef);
export default MemoForwardRef;

import React from 'react';
import PropTypes from 'prop-types';

const Filter = React.memo(
  React.forwardRef(({ title, titleId, ...props }, svgRef) => (
    <svg
      viewBox="0 0 24 24"
      className="dbx-icon"
      width="24"
      height="24"
      role="img"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M9.5 19.8c.2.1.3.1.5.1s.3 0 .4-.1l4-2c.3-.2.6-.5.6-.9v-3.7l4.8-7.8c.2-.3.2-.7 0-1-.2-.3-.5-.5-.9-.5h-14c-.4 0-.7.2-.9.5 0 .4 0 .8.2 1.1L9 13.3V19c.1.3.3.6.5.8zM6.9 5.9h10.4l-4 6.5c-.1.2-.2.3-.2.5v3.4l-2 1v-4.4c0-.2-.1-.4-.2-.5l-4-6.5z"
        fill="currentColor"
      />
    </svg>
  ))
);
Filter.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
Filter.defaultProps = {
  title: null,
  titleId: null,
};
export default Filter;

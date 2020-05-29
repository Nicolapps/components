import React from 'react';
import PropTypes from 'prop-types';

const ActionUpload = React.memo(
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
        d="M6 22h12a3 3 0 003-3v-4c0-.563-.438-1-1-1-.563 0-1 .438-1 1v4c0 .563-.438 1-1 1H6c-.563 0-1-.438-1-1v-4c0-.563-.438-1-1-1-.563 0-1 .438-1 1v4a3 3 0 003 3zm6-20c.25 0 .531.093.719.28l3.969 3.992a.902.902 0 01.312.717c0 .53-.438.966-1 .966-.25 0-.531-.093-.719-.28L13 5.399v9.603c0 .561-.469.998-1 .998-.563 0-1-.437-1-.998V5.4L8.719 7.675c-.219.187-.469.28-.719.28-.563 0-1-.436-1-.997 0-.25.094-.5.313-.686L11.28 2.28c.19-.187.47-.28.72-.28z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ))
);
ActionUpload.propTypes = {
  title: PropTypes.string,
  titleId: PropTypes.string,
};
ActionUpload.defaultProps = {
  title: null,
  titleId: null,
};
export default ActionUpload;

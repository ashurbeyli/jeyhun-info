import React from 'react';

import './TagItem.scss';

const TagItem = ({ title }) => {
  return (
    <div className="tagItem">
      { title }
    </div>
  );
};
export default TagItem;
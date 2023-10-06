import React from 'react';

const LeftArrowIcon: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="currentColor"
      {...props}
    >
      <path d="M12.71,5.71c.39-.39,.39-1.02,0-1.41-.39-.39-1.02-.39-1.41,0l-7,7c-.39,.39-.39,1.02,0,1.41l7,7c.39,.39,1.02,.39,1.41,0,.39-.39,.39-1.02,0-1.41l-5.29-5.29h11.59c.55,0,1-.45,1-1s-.45-1-1-1H7.41l5.29-5.29Z" />
    </svg>
  );
};

export default LeftArrowIcon;

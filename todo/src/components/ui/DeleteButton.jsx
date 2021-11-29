import React from 'react';

export default function Button({ onClick, type, label,  ...props }) {
  return (
    <div {...props}>
      <button className={`btn btn-sm btn-${type}`} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

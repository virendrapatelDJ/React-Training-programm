import React from 'react';

export default function Button({ onClick, type, ...props }) {
  return (
    <div {...props}>
      <button className={`btn btn-sm btn-${type}`} onClick={onClick}>
        Delete
      </button>
    </div>
  );
}

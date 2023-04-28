import React from 'react';

const Display = ({ selectedRows }) => {
  return (
    <div className="display">
      <h2>Selected Rows:</h2>
  {/* <div className="display-header">Display Header</div> */}
  <div className="display-border"></div>
  <div className="display-content">
    <ul>
      {selectedRows.map((row, index) => (
        <li key={index}>{row}</li>
      ))}
    </ul>
  </div>
</div>

  );
};

export default Display;

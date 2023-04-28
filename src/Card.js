import React from 'react';

const Card = ({ title, v1 = "ji", v2, v3,v4,v5,row5,row4, row1, row2, row3, selectedRows, handleSelectedRowsChange }) => {
  // Event handler for checkbox click
  const handleCheckboxClick = (row) => {
    const isSelected = selectedRows.includes(row); // Check if row is already selected

    // Update selectedRows state based on checkbox click
    if (isSelected) {
      handleSelectedRowsChange(selectedRows.filter((r) => r !== row)); // Remove row from selectedRows
    } else {
      handleSelectedRowsChange([...selectedRows, row]); // Add row to selectedRows
    }
  };

  return (
    <div className="card card-gray">
      {/* Card content */}
      {/* ... */}
      <div className="card" style={{ width: '300px' }}>
        <div className="card-header" style={{ height: '50px', color: 'black', textAlign: 'justify' }}>
          {title}
        </div>
        <div className="card-body">
          <div className="d-flex flex-row">
            <input type="checkbox" className="checkbox" onClick={() => handleCheckboxClick(row1)} />
            <p className="content">{v1}</p>
          </div>
          <div className="d-flex flex-row">
            <input type="checkbox" className="checkbox" onClick={() => handleCheckboxClick(row2)} />
            <p className="content">{v2}</p>
          </div>
          <div className="d-flex flex-row">
            <input type="checkbox" className="checkbox" onClick={() => handleCheckboxClick(row3)} />
            <p className="content">{v3}</p>
          </div>
          <div className="d-flex flex-row">
            <input type="checkbox" className="checkbox" onClick={() => handleCheckboxClick(row4)} />
            <p className="content">{v4}</p>
          </div>
          <div className="d-flex flex-row">
            <input type="checkbox" className="checkbox" onClick={() => handleCheckboxClick(row5)} />
            <p className="content">{v5}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

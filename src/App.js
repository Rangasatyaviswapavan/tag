import React, { useState } from 'react';
import Card from "./Card"
import Display from "./Display";
import './io.css'
import SideBar from "./SideBar";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [selectedRows, setSelectedRows] = useState([]); // State to keep track of selected rows

  // Event handler for updating selected rows
  const handleSelectedRowsChange = (selectedRows) => {
    if (selectedRows.length > 5) {
      alert("Only 5 rows can be selected at max!");
    } else {
      setSelectedRows(selectedRows);
    }
  };

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <SideBar />
      <main>
        <h1 style={{ color: "black", marginLeft: "5rem" }}>
          Trading Analysis Group
        </h1>
        <div className="container" style={{ color: "black", marginLeft: "5rem", display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
            <Card
                title="CURRENCY"
                v1="RUPEE"
                v2="DOLLAR"
                v3="POUND"
                v4="EURO"
                v5="YEN"
                row5="JAPAN"
                row4="EUROPE"
                row1="INDIA"
                row2="USA"
                row3="UK"
                selectedRows={selectedRows}
                handleSelectedRowsChange={handleSelectedRowsChange}
                style={{ color:"red", border: "1px solid black" }}
              />
              <Card
                title="Indices"
                v1="NASDAQ"
                v2="SENSEX"
                v3="FTSE"
                v4="DAX"
                v5="TSX"
                row5="CANADA"
                row4="GERMANY"
                row1="LONDON"
                row2="INDIA"
                row3="USA"
                selectedRows={selectedRows}
                handleSelectedRowsChange={handleSelectedRowsChange}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
            <Card
              title="COMMODITIES"
              v1="GOLD"
              v2="OIL"
              v3="GAS"
              v4="ETHANOL"
              v5="IRON"
              row5="iron"
              row4="ethanol"
              row1="gold"
              row2="oil"
              row3="gas"
              selectedRows={selectedRows}
              handleSelectedRowsChange={handleSelectedRowsChange}
              />
              
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
            <Card
              title="Crypto Curency"
              v1="bitcoin"
              v2="ethereum"
              v3="solana"
              v4="Polkadot "
              v5="Cardano"
              row5="cardano"
              row4="polkadot"
              row1="bitcoin"
              row2="eth"
              row3="solana"
              selectedRows={selectedRows}
              handleSelectedRowsChange={handleSelectedRowsChange}
              />
              <Display selectedRows={selectedRows} style={{ backgroundColor: "lightblue", border: "1px solid black" }} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


export default App;

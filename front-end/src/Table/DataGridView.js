import React, { useState, useEffect } from "react";
import DataGrid from "react-data-grid";

const columns = [
  { key: "id", name: "ID" },
  { key: "name", name: "name" },
  { key: "email", name: "email" },
  { key: "gender", name: "gender" },
  { key: "dateOfBirth", name: "dateOfBirth" },
];

const DataGridView = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/members")
      .then((data) => data.json())
      .then((data) => setTableData(data.data));
  }, []);

  console.log(tableData);

  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={tableData}
        style={{ height: "100vh", padding: "0.5rem" }}
      />
    </div>
  );
};

export default DataGridView;

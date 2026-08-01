import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

interface InventoryItem {
  id: number;
  product: string;
  category: string;
  stock: number;
  status: "In Stock" | "Out of Stock";
}

const InventoryGrid: React.FC = () => {
  const rowData = useMemo<InventoryItem[]>(
    () => [
      {
        id: 1,
        product: "PixelMate",
        category: "Electronics",
        stock: 595,
        status: "In Stock",
      },
      {
        id: 2,
        product: "FusionLink",
        category: "Electronics",
        stock: 761,
        status: "In Stock",
      },
      {
        id: 3,
        product: "VelvetAura",
        category: "Apparel",
        stock: 0,
        status: "Out of Stock",
      },
    ],
    []
  );

  const columnDefs = useMemo<ColDef<InventoryItem>[]>(
    () => [
      {
        field: "product",
        headerName: "Product",
        flex: 1,
      },
      {
        field: "category",
        headerName: "Category",
        flex: 1,
      },
      {
        field: "stock",
        headerName: "Stock",
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        flex: 1,
        cellRenderer: (params: any) => (
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              params.value === "In Stock"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {params.value}
          </span>
        ),
      },
    ],
    []
  );

  const defaultColDef = useMemo<ColDef>(
    () => ({
      sortable: true,
      filter: true,
      floatingFilter: true,
      resizable: true,
    }),
    []
  );

  return (
    <div
      className="ag-theme-quartz rounded-xl overflow-hidden"
      style={{
        height: 450,
        width: "100%",
      }}
    >
      <AgGridReact<InventoryItem>
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination
        paginationPageSize={5}
        animateRows
      />
    </div>
  );
};

export default InventoryGrid;
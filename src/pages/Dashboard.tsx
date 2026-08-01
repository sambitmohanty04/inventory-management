import React from "react";
import InventoryGrid from "../components/InventoryGrid";

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 p-6 bg-gray-100 min-h-screen">

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-xl bg-white p-6 shadow">
          <h4 className="text-gray-500 text-sm">Total Sales</h4>
          <p className="mt-2 text-3xl font-bold text-indigo-600">$10,356</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h4 className="text-gray-500 text-sm">Orders</h4>
          <p className="mt-2 text-3xl font-bold text-blue-600">2,379</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h4 className="text-gray-500 text-sm">Customers</h4>
          <p className="mt-2 text-3xl font-bold text-green-600">582</p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h4 className="text-gray-500 text-sm">Revenue</h4>
          <p className="mt-2 text-3xl font-bold text-pink-600">$84K</p>
        </div>

      </div>

      {/* Inventory Grid */}

      <div className="rounded-xl bg-white shadow">

        <div className="border-b px-6 py-4">

          <h2 className="text-2xl font-bold text-gray-800">
            Inventory
          </h2>

          <p className="text-sm text-gray-500">
            Product inventory overview
          </p>

        </div>

        <div className="p-5">
          <InventoryGrid />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
import { useState } from "react";

import {
  FiHome,
  FiShoppingBag,
  FiPackage,
  FiUsers,
  FiSettings,
  FiChevronDown,
  FiBarChart2,
} from "react-icons/fi";

export default function Sidebar() {
  const [openStore, setOpenStore] = useState(true);

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col">
      {/* Logo */}
      <div className="p-6 text-xl font-bold">
        Siva Tiles & Marbles
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-4">

        <p className="text-xs text-gray-400 mb-2">
          MAIN MENU
        </p>

        <MenuItem icon={<FiHome />} text="Home" />

        <button
          onClick={() => setOpenStore(!openStore)}
          className="w-full flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          <span className="flex items-center gap-3">
            <FiShoppingBag />
            My Store
          </span>

          <FiChevronDown
            className={`${openStore ? "rotate-180" : ""} transition`}
          />
        </button>

        {openStore && (
          <div className="ml-8 mt-1 space-y-1">
            <SubMenu text="Products" />
            <SubMenu text="Orders" />

            <SubMenu
              text="Inventory"
              active
            />

            <SubMenu text="Discount" />
          </div>
        )}

        <MenuItem
          icon={<FiBarChart2 />}
          text="Analytics"
        />

        <MenuItem
          icon={<FiUsers />}
          text="Customers"
        />

        <MenuItem
          icon={<FiSettings />}
          text="Settings"
        />
      </div>

      {/* User */}
      <div className="border-t p-4 flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full"
          alt=""
        />

        <div>
          <h4 className="font-medium">
            John Doe
          </h4>

          <p className="text-xs text-gray-500">
            CEO
          </p>
        </div>
      </div>
    </aside>
  );
}

function MenuItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
      {icon}
      {text}
    </button>
  );
}

function SubMenu({
  text,
  active = false,
}: {
  text: string;
  active?: boolean;
}) {
  return (
    <button
      className={`block w-full text-left px-3 py-2 rounded-lg ${
        active
          ? "bg-indigo-100 text-indigo-600 font-medium"
          : "hover:bg-gray-100"
      }`}
    >
      {text}
    </button>
  );
}
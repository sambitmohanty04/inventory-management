import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  to: string;
  badge?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  title,
  to,
  badge,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200
        ${
          isActive
            ? "bg-indigo-100 text-indigo-600 font-semibold"
            : "text-gray-600 hover:bg-gray-100 hover:text-black"
        }`
      }
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{icon}</span>
        <span>{title}</span>
      </div>

      {badge && (
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
    </NavLink>
  );
};

export default SidebarItem;
import React from "react";
import { FiSearch, FiBell, FiMail } from "react-icons/fi";

interface NavbarProps {
  userName: string;
  profileImage: string;
  onSearch?: (value: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  userName,
  profileImage,
  onSearch,
}) => {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      <div className="relative w-80">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder={`Search, ${userName}...`}
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg border"
        />
      </div>

      <div className="flex items-center gap-5">
        <FiBell size={22} />
        <FiMail size={22} />

        <img
          src={profileImage}
          alt={userName}
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Navbar;
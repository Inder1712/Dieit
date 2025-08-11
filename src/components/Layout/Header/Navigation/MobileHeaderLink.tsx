import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

interface MobileHeaderLinkProps {
  item: HeaderItem;
  onClick?: () => void;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item, onClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmenuOpen(!submenuOpen);
  };

  // A helper to handle clicks for links that close the navbar
  const handleLinkClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className="relative w-full">
      {item.submenu ? (
        <>
          {/* Parent with submenu toggles submenu on click */}
          <button
            onClick={handleToggle}
            className="flex items-center justify-between w-full py-2 text-muted focus:outline-none"
            type="button"
          >
            {item.label}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m7 10l5 5l5-5"
              />
            </svg>
          </button>
          {submenuOpen && (
            <div className="bg-white p-2 w-full">
              {item.submenu.map((subItem, index) => (
                <Link key={index} href={subItem.href} legacyBehavior>
                  <a
                    onClick={handleLinkClick}
                    className="block py-2 text-gray-500 hover:bg-gray-200"
                  >
                    {subItem.label}
                  </a>
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        // Simple link (no submenu), close navbar on click
        <Link href={item.href} legacyBehavior>
          <a
            onClick={handleLinkClick}
            className="flex items-center w-full py-2 text-muted focus:outline-none"
          >
            {item.label}
          </a>
        </Link>
      )}
    </div>
  );
};

export default MobileHeaderLink;

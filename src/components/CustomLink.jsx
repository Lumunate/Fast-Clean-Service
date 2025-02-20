import React, { useContext } from "react";
import { ExitIntentContext } from "../contexts/ExitIntentContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ALLOWED_PATHS = ["/booking", "/fleet", "/other-vehicles"];

const CustomLink = ({ href, children, ...props }) => {
  const { openModal } = useContext(ExitIntentContext);
  const currentPath = usePathname(); // Get current path

  const handleClick = (e) => {
    if (ALLOWED_PATHS.includes(currentPath)) {
      e.preventDefault();
      openModal(href);
    }
    // Else, allow normal navigation
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;

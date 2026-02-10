import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          Store
        </Link>
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          <NavLinks variant="desktop" />
        </ul>
        {/* Mobile Menu */}
        <ul className="md:hidden flex items-center gap-4">
          <NavLinks variant="mobile" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

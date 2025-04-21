import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setMode } from "@/redux/slices/themeSlice";
import { Bell, Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: RootState) => state.theme.darkMode);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleTheme = () => dispatch(setMode(!isDarkMode));

  const navLinkClass = "hover:text-blue-600 cursor-pointer";

  return (
    <nav
      className={`shadow-lg z-50 px-4 py-3 md:px-8 flex items-center justify-between relative h-18 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-xl font-bold text-blue-600">LearnLegalEasy</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 font-medium">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className={navLinkClass}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Bell className={navLinkClass} />
          <Button onClick={toggleTheme} variant="ghost" aria-label="Toggle dark mode">
            {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700" variant="ghost" size="lg">
            Sign Up
          </Button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        {isMenuOpen ? (
          <X className="cursor-pointer" onClick={toggleMenu} />
        ) : (
          <Menu className="cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full py-4 px-6 md:hidden shadow-md z-50 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <Bell className={navLinkClass} />
            <Button onClick={toggleTheme} variant="ghost" aria-label="Toggle dark mode">
              {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

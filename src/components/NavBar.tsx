import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setMode } from "@/redux/slices/themeSlice";
import { Bell, Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import LearnLegalEasyLogo from "@/assets/LearnLegalEasy_logo.png";
const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const NavBar = ( { onOpenSignup }: { onOpenSignup: () => void } ) => {

  const [isMenuOpen, setIsMenuOpen] = useState( false );
  const [scrollProgress, setScrollProgress] = useState( 0 );
  const dispatch = useDispatch();
  const isDarkMode = useSelector( ( state: RootState ) => state.theme.darkMode );

  const toggleMenu = () => setIsMenuOpen( ( prev ) => !prev );
  const toggleTheme = () => dispatch( setMode( !isDarkMode ) );

  const navLinkClass = "hover:text-blue-600 cursor-pointer";
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };
  
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);


  return (
    <nav
      className={`shadow-lg z-50 px-4 py-3 md:px-8 flex items-center justify-between relative h-18 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="https://media-hosting.imagekit.io/21baa5e0aa6140ee/LearnLegalEasy_logo (1).png?Expires=1839871673&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BhY~dU1xhHiQ~3mAE1u5T3cgZxTE1MjxC~R6mGRwO1ZHSDpIZq1EbM1CXkp1o-dNq4VoN~AQeAlnsZSPSHqguXSotPJ58e~6LX6OZDOMhc52lNtjEWTDTkja011-V4hkmHFuNhE0ryBoyIecxBmAVJe6SYAQ7xsuJVT~5OW~PJ6kpCcv6R8vdH2bKpiMKRYYXFKVhqJ9ydPPt~i9a0jo3Aifq33bMNxS-AiuzULWEAb2HQgD~9XhX-isqv41Rq707sBOsuMTp5oTrf4t3gpMfhgHMkoB07OZ8vCvgLVSfi-GikcH9iHpra0amLchgCDb3bM-fZdXEVhgcHy5yqLwOw__" alt="" className="h-15 w-20 bg-transparent" />

        <span className="text-xl font-bold text-blue-600 cursor-pointer" ><a href="/">LearnLegalEasy</a></span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 font-medium">
        <ul className="flex items-center gap-6">
          {navItems.map( ( item ) => (
            <li key={item.label}>
              <a href={item.href} className={navLinkClass}>
                {item.label}
              </a>
            </li>
          ) )}
        </ul>
        <div className="flex items-center gap-4">
          <Bell className={navLinkClass} />
          <Button onClick={toggleTheme} variant="ghost" aria-label="Toggle dark mode">
            {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer" variant="ghost" size="lg" onClick={onOpenSignup}>

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
          className={`absolute top-full left-0 w-full py-4 px-6 md:hidden shadow-md z-50 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
        >
          <ul className="flex flex-col gap-4">
            {navItems.map( ( item ) => (
              <li key={item.label}>
                <a href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              </li>
            ) )}
          </ul>
          <div className="mt-4 flex items-center justify-between">
            <Bell className={navLinkClass} />
            <Button onClick={toggleTheme} variant="ghost" aria-label="Toggle dark mode">
              {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer" onClick={onOpenSignup}>
              Sign Up

            </Button>
          </div>
        </div>
      )}
       <div
        className="absolute bottom-0 left-0 h-[3px] bg-blue-600 transition-all duration-200 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </nav>
  );
};

export default NavBar;

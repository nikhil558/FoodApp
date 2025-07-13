import { LOGO_IMG } from "../../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { CommonInfo } from "../../utils/CommonInfo";
import { useSelector } from "react-redux";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";

const Header = () => {
  const [btnSwitch, setBtnSwitch] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { profileName } = useContext(CommonInfo);

  const cart = useSelector((store) => store.cart.items);
  const fav = useSelector((store) => store.favorites.items);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img alt="logo" className="h-10 w-auto" src={LOGO_IMG} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <div
                className={`w-2 h-2 rounded-full ${
                  useOnlineStatus() ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
              <span className="text-muted-foreground">
                {useOnlineStatus() ? "Online" : "Offline"}
              </span>
            </div>

            <Link
              to="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
            <Link
              to="/grocery"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Grocery
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/favorites"
                className="relative p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <Heart className="h-5 w-5" />
                {fav.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {fav.length}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                className="relative p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>

              {profileName && (
                <div className="flex items-center space-x-2 px-3 py-1 bg-accent rounded-lg">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{profileName}</span>
                </div>
              )}

              <button
                onClick={() => {
                  btnSwitch === "Login"
                    ? setBtnSwitch("Logout")
                    : setBtnSwitch("Login");
                }}
                variant={btnSwitch === "Login" ? "default" : "outline"}
                size="sm"
              >
                {btnSwitch}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="px-4 py-4 space-y-4">
              <div className="flex items-center space-x-2 text-sm pb-2 border-b">
                <div
                  className={`w-2 h-2 rounded-full ${
                    useOnlineStatus() ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <span className="text-muted-foreground">
                  {useOnlineStatus() ? "Online" : "Offline"}
                </span>
              </div>

              <nav className="flex flex-col space-y-3">
                <Link
                  to="/"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Contact
                </Link>
                <Link
                  to="/grocery"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Grocery
                </Link>
              </nav>

              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center space-x-3">
                  <Link
                    to="/favorites"
                    className="relative p-2 hover:bg-accent rounded-lg transition-colors"
                  >
                    <Heart className="h-5 w-5" />
                    {fav.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {fav.length}
                      </span>
                    )}
                  </Link>

                  <Link
                    to="/cart"
                    className="relative p-2 hover:bg-accent rounded-lg transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </Link>
                </div>

                <Button
                  onClick={() => {
                    btnSwitch === "Login"
                      ? setBtnSwitch("Logout")
                      : setBtnSwitch("Login");
                  }}
                  variant={btnSwitch === "Login" ? "default" : "outline"}
                  size="sm"
                >
                  {btnSwitch}
                </Button>
              </div>

              {profileName && (
                <div className="flex items-center space-x-2 px-3 py-2 bg-accent rounded-lg">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{profileName}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PenTool, Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blogs", label: "All Blogs" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-blog-gradient flex items-center justify-center">
            <PenTool className="h-4 w-4 text-white" />
          </div>
          <span className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent">
            BlogHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="hidden md:flex bg-blog-gradient hover:opacity-90">
            <PenTool className="h-4 w-4 mr-2" />
            Write
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button size="sm" className="bg-blog-gradient hover:opacity-90">
                <PenTool className="h-4 w-4 mr-2" />
                Write
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
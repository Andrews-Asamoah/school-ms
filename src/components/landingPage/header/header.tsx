"use client";
import Link from "next/link";
import { Button } from "../../ui/button";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Menu } from "lucide-react";
import { navigationItems } from "./navigationItems";
import NavLink from "./nav";
import { useRouter } from "next/navigation";
import ScrollingBanner from "../scrollingBanner";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const sectionId = href.slice(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
    if (open) setOpen(false);
  };

  return (
    <>
      <div
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-0 ${
          bannerVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {bannerVisible && (
          <ScrollingBanner onClose={() => setBannerVisible(false)} />
        )}
      </div>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              WIS
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  onClick={handleNavigation}
                />
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/admission">
                <Button variant="outline" className="font-medium">
                  Apply Now
                </Button>
              </Link>
              <Link href="/signin">
                <Button className="bg-primary text-white font-medium">
                  Sign In
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4">
                  {navigationItems.map((item) => (
                    <NavLink
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      onClick={handleNavigation}
                      variant="mobile"
                    />
                  ))}
                  <div className="flex flex-col gap-2 mt-4">
                    <NavLink
                      title="Apply Now"
                      href="/admission"
                      variant="button"
                    />
                    <NavLink title="Sign In" href="/signin" variant="button" />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

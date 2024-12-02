"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigationItems } from "./navigationItems";
import ScrollingBanner from "../scrollingBanner";
import NavLink from "./nav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bannerVisible]);

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
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          bannerVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {bannerVisible && (
          <ScrollingBanner onClose={() => setBannerVisible(false)} />
        )}
      </div>
      <header
        className={`sticky z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        } ${bannerVisible ? "top-10" : "top-0"}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent"
            >
              Wesley International
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.title}
                  title={item.title}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                />
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <NavLink title="Apply Now" href="/admission" variant="button" />
              <NavLink title="Sign In" href="/signin" variant="button" />
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
                      onClick={(e) => handleNavigation(e, item.href)}
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
}

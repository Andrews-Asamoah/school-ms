import { Button } from "@/components/ui/button";
import Link from "next/link";

type NavLinkprop = {
  title: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  variant?: "default" | "mobile" | "button";
};

const NavLink = ({ title, href, onClick, variant }: NavLinkprop) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e, href);
    }
  };
  if (variant === "button") {
    return (
      <Button
        variant={title === "Sign In" ? "default" : "outline"}
        className={`font-medium ${title === "Sign In" ? "bg-primary" : ""}`}
        asChild
      >
        <Link href={href} onClick={handleClick}>
          {title}
        </Link>
      </Button>
    );
  }

  const className =
    variant === "mobile"
      ? "text-lg font-medium text-gray-400 hover:text-primary"
      : "text-sm font-medium text-gray-400 hover:text-primary transition-colors";

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {title}
    </Link>
  );
};

export default NavLink;

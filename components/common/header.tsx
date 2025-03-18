import { FileText, Link } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./nav-link";

export default function Header() {
    const isLoggedIn = false;
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex item-center gap-1 lg:gap-2 shrink-0">
          <FileText className="h-6 w-6 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transition-transform duration-300" />
          <span className="lg:text-xl text-gray-900 font-extrabold">
            QuickGist
          </span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/Pricing">
          Pricing
        </NavLink>
        {isLoggedIn && <NavLink href="/dashboard">
          Your Gists
        </NavLink>}
      </div>
      <div className="flex lg:flex-1 justify-end">
        {isLoggedIn ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
}

function LogoutButton() {
    return (
        <div className="flex items-center gap-2">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <Button variant="outline">Sign Out</Button>
        </div>
    )
}

function LoginButton() {
    return (
        <NavLink href="/contact">
          Sign In
        </NavLink>
    )
}
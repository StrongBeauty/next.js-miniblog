import Link from "next/link";
import { Navigation } from "@/app/components/Navigation";

const navItems = [
  {label: "Home", href: "/"},
  {label: "Blog", href: "/blog"},
  {label: "About", href:"/about"}
]

export const Header = () => {
    return (
      <header className="container">
        <Navigation navLinks={navItems} />
      </header>
  )
}
'use client'

import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
}

type Props = {
  navLinks: NavLink[];
}
export const Navigation = ({navlinks}: Props) => {
  const pathname = usePathname();
  return (
    <div>

    </div>
  )
}
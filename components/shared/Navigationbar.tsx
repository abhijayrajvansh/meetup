'use client';

import { headerLinks } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navigationbar = () => {

  const pathname = usePathname();

  return (
    <div className="md:flex flex flex-col gap-5 md:gap-10 md:flex-row w-full">
      {
        headerLinks.map((link) => {
          
          const isActive = pathname === link.route;
          
          return (
            <li key={link.route}
              className={`${isActive && 'text-primary'} flex-center p-medium-16 whitespace-nowrap`}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          )
        })
      }
    </div>
  )
}

export default Navigationbar;
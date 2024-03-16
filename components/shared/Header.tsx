import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import Navigationbar from "./Navigationbar";
import MobileNavigation from "./MobileNavigation";
import Image from "next/image";


const Header = () => {
  return (
    <header className="w-full shadow-xl border-b border-gray-700 bg-gray-900 text-white">
      <div className="wrapper flex items-center justify-between">
        
        <Link href={'/'} className="w-36 flex items-center gap-2">
          <Image width={38} height={38} src="/images/logo.png" alt="meetup-logo" />
          <h1 className="text-3xl sm:font-semibold text-white font-semibold">meetup!</h1>
        </Link>

        
        {/* navigationbar */}
        <SignedIn>
          <nav className="hidden md:flex justify-between max-w-sm">
            <Navigationbar  />
          </nav>
        </SignedIn>


        {/* user profile and login/logout */}
        <div className="flex items-center w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <nav className="md:hidden flex">
              <MobileNavigation />
            </nav>
          </SignedIn>

          <SignedOut>
            <Button asChild size='lg' variant='default'>
              <Link href="/signin">
                Log in
              </Link>
            </Button>
          </SignedOut>
        </div>

      </div>
    </header>
  )
}

export default Header;
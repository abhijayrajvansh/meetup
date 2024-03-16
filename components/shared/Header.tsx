import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import Navigationbar from "./Navigationbar";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href={'/'} className="w-36">
          <h1 className="text-3xl sm:font-semibold text-red-500 font-bold">meetup!</h1>
        </Link>

        <div className="flex w-32 justify-end gap-3">

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Navigationbar />
        </SignedIn>

        <SignedOut>
          <Button asChild size='lg' variant='destructive'>
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
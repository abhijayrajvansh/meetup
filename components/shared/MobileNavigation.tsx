import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Separator } from "@/components/ui/separator"
import Navigationbar from "./Navigationbar";
import Image from "next/image";



const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HiOutlineMenuAlt3 className="text-3xl" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 bg-[#111827] text-white">
        <div className="flex items-center gap-2">
          <Image width={38} height={38} src="/images/logo.png" alt="meetup-logo" />
          <h1 className="text-3xl sm:font-semibold text-white font-bold">meetup!</h1>
        </div>
        <Separator />
          <Navigationbar />
      </SheetContent>
    </Sheet>

  )
}

export default MobileNavigation;